/* 构建 React 版设计系统：
   1. 类型检查（tsc）；
   2. 把 src/index.tsx 打包为一个经典脚本 components/bundle.js，读取 window.React，挂载到 window.Endfield；
   3. 生成 components/index.d.ts；
   4. 把 previews/<Comp>.tsx 编译后写入 components/<Comp>/preview.html。 */
import { build } from 'esbuild';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const COMP = path.join(ROOT, 'project/components');
const SRC = path.join(COMP, 'src');
const PREV = path.join(ROOT, 'previews');
const cards = JSON.parse(fs.readFileSync(path.join(PREV, 'cards.json'), 'utf8'));

/* react 与 react-dom 解析为页面上的全局对象 */
const globals = {
  name: 'react-globals',
  setup(b) {
    b.onResolve({ filter: /^react(-dom)?(\/client)?$/ }, (a) => ({ path: a.path, namespace: 'g' }));
    b.onLoad({ filter: /.*/, namespace: 'g' }, (a) => ({
      contents: 'module.exports = window.' + (a.path.startsWith('react-dom') ? 'ReactDOM' : 'React') + ';',
      loader: 'js',
    }));
  },
};
const common = { loader: { '.html': 'text' }, bundle: true, format: 'iife', minify: true, target: 'es2019', jsx: 'transform', plugins: [globals], define: { 'process.env.NODE_ENV': '"production"' }, write: false, logLevel: 'error', charset: 'utf8' };

function guard(name, text) {
  if (/<\/script|<!--/i.test(text)) throw new Error(name + ' 含有 </script 或 <!--，内联时会提前结束脚本');
  return text;
}

/* 与 HTML 版共用样式与 tokens：每次构建从 ../design-system 复制，并把资源编号换成本系统中的副本 */
const HTML = path.join(ROOT, '../design-system/project');
const ids = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/asset-ids.json'), 'utf8'));
const remap = (t) => t.replace(/\/_blob\/([0-9a-f]{32})/g, (m, id) => '/_blob/' + (ids[id] || id));
fs.writeFileSync(path.join(COMP, 'bundle.css'), remap(fs.readFileSync(path.join(HTML, 'components/bundle.css'), 'utf8')));
fs.copyFileSync(path.join(HTML, 'tokens.json'), path.join(ROOT, 'project/tokens.json'));

const tsc = path.join(ROOT, 'node_modules/.bin/tsc');
execFileSync(tsc, ['-p', path.join(ROOT, 'tsconfig.json')], { stdio: 'inherit' });

/* 组件包 */
const lib = await build({ ...common, entryPoints: [path.join(SRC, 'index.tsx')], globalName: '__EF', footer: { js: 'window.Endfield=Object.assign(window.Endfield||{},__EF);' } });
const catalogue = cards.filter((c) => !c.static && !c.page).map((c) => ({ name: c.name }));
const header = '/* @ds-bundle: ' + JSON.stringify({ format: 4, namespace: 'Endfield', components: catalogue }) + ' */\n';
fs.writeFileSync(path.join(COMP, 'bundle.js'), header + guard('bundle.js', lib.outputFiles[0].text));

/* 类型声明：逐文件生成后合并为一个 index.d.ts */
const tmp = fs.mkdtempSync(path.join(ROOT, '.dts-'));
try {
  const files = fs.readdirSync(SRC).filter((f) => /\.tsx?$/.test(f)).map((f) => path.join(SRC, f));
  execFileSync(tsc, ['--declaration', '--emitDeclarationOnly', '--jsx', 'react', '--strict', '--skipLibCheck', '--target', 'ES2019', '--module', 'ESNext', '--moduleResolution', 'Bundler', '--lib', 'ES2020,DOM,DOM.Iterable', '--outDir', tmp, ...files], { stdio: 'inherit' });
  const order = ['icons-data', 'icons', 'util'];
  const dts = fs.readdirSync(tmp).filter((f) => f.endsWith('.d.ts') && f !== 'index.d.ts')
    .sort((a, b) => (order.indexOf(a.replace('.d.ts', '')) + 1 || 99) - (order.indexOf(b.replace('.d.ts', '')) + 1 || 99) || a.localeCompare(b));
  let body = '';
  for (const f of dts) {
    const t = fs.readFileSync(path.join(tmp, f), 'utf8')
      .split('\n')
      .filter((l) => !/from ['"]\.\//.test(l) && !/^import .* from ['"]react['"]/.test(l) && !/^export \{\};?$/.test(l))
      .join('\n').trim();
    if (t) body += '\n' + t + '\n';
  }
  const names = catalogue.map((c) => c.name);
  const head = '/* ENDFIELD 设计系统 React 组件的类型说明。组件在 window.Endfield 上，页面需先加载 React 18 与 ReactDOM 18。 */\nimport type * as React from \'react\';\n';
  fs.writeFileSync(path.join(COMP, 'index.d.ts'), head + body + '\ndeclare global { interface Window { Endfield: typeof import(\'./index\') } }\n');
  void names;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}

/* 预览 */
const SHELL = (c, script) => `<!-- @dsCard group="${c.group}" height=${c.height}${c.page ? " page" : ""} -->
<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>${c.name}</title>
<style>${c.style}</style>
</head>
<body>
<div id="root"></div>
<script>${script}</script>
</body>
</html>
`;
for (const c of cards) {
  const dir = path.join(COMP, c.name);
  fs.mkdirSync(dir, { recursive: true });
  if (c.static) continue;
  const src = path.join(PREV, c.name + '.tsx');
  if (!fs.existsSync(src)) { console.log('缺少预览', c.name); continue; }
  const out = await build({ ...common, entryPoints: [src] });
  fs.writeFileSync(path.join(dir, 'preview.html'), remap(SHELL(c, guard(c.name, out.outputFiles[0].text.trim()))));
}
console.log('built', catalogue.length, 'components');
