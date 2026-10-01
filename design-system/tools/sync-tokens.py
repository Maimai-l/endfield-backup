"""Write the variables compiled from tokens.json into the head of bundle.css.

The page compiles project/tokens.css only when the system is saved on the page,
so previews could run on stale values. bundle.css loads after tokens.css, so the
block written here makes every preview follow tokens.json.
"""
import json, pathlib, re

root = pathlib.Path(__file__).resolve().parent.parent / 'project'
tokens = json.loads((root / 'tokens.json').read_text())
themes = [t['id'] for t in tokens['color']['themes']]

def value(v, theme):
    if isinstance(v, str):
        return v
    return v.get(theme, v[themes[0]])

def css(v):
    return 'var(--' + v[1:-1] + ')' if v.startswith('{') and v.endswith('}') else v

blocks = []
for i, theme in enumerate(themes):
    sel = f':root,[data-theme="{theme}"]' if i == 0 else f'[data-theme="{theme}"]'
    decl = [f"--{t['name']}:{css(value(t['value'], theme))}" for t in tokens['color']['tokens']]
    decl += [f"--{t['name']}:{value(t['value'], theme)}" for t in tokens['shadow']['tokens']]
    blocks.append(sel + '{' + ';'.join(decl) + '}')
plain = [f"--{t['name']}:{t['value']}" for fam in ('spacing', 'size', 'radius', 'zIndex', 'duration') for t in tokens[fam]['tokens']]
plain += [f'--font-{k}:{v}' for k, v in tokens['type']['families'].items()]
blocks.append(':root{' + ';'.join(plain) + '}')

start, end = '/* tokens:start */', '/* tokens:end */'
body = start + '\n' + '\n'.join(blocks) + '\n' + end
path = root / 'components' / 'bundle.css'
text = path.read_text()
if start in text:
    text = re.sub(re.escape(start) + r'.*?' + re.escape(end), lambda m: body, text, flags=re.S)
else:
    head, rest = text.split('\n', 2)[:2], text.split('\n', 2)[2]
    text = '\n'.join(head) + '\n' + body + '\n' + rest
path.write_text(text)
print('synced', len(tokens['color']['tokens']), 'color tokens')
