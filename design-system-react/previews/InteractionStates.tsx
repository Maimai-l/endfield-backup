import * as React from 'react';
import { E, mount } from './_kit';
const { Button, IconButton, TextField, Checkbox, Switch, Select } = E;

function St({ name, en, desc, msg, cells }: { name: string; en: string; desc: string; msg?: boolean; cells: React.ReactNode[] }) {
  return (
    <div className={msg ? 'st st--msg' : 'st'}>
      <div className="st-name"><b>{name}</b><span>{en}</span></div>
      <div className="st-desc">{desc}</div>
      <div className="st-demo">{cells.map((c, i) => <div key={i} className="st-cell">{c}</div>)}</div>
    </div>
  );
}

mount(
  <div style={{ padding: 16 }}>
    <div className="states">
      <St name="默认" en="rest" desc="控件的静止外观。" cells={[<Button variant="primary">保存</Button>, <TextField size="sm" aria-label="编号" placeholder="编号" />, <Checkbox>启用</Checkbox>]} />
      <St name="悬停" en=":hover" desc="底色加深一级，主要按钮竖条变为三角。" cells={[<Button variant="primary" className="is-hover">保存</Button>, <TextField size="sm" className="is-hover" aria-label="编号" placeholder="编号" />, <Checkbox className="is-hover">启用</Checkbox>]} />
      <St name="按下" en=":active" desc="底色再加深一级，无位移、无缩放。" cells={[<Button variant="primary" className="is-hover is-active">保存</Button>, <Button className="is-active">取消</Button>, null]} />
      <St name="焦点" en=":focus-visible" desc="2px 焦点环，外偏移 2px。" cells={[<Button variant="primary" className="is-focus">保存</Button>, <TextField size="sm" className="is-focus" aria-label="编号" defaultValue="ID-000302" />, <Checkbox className="is-focus" defaultChecked>启用</Checkbox>]} />
      <St name="选中" en="checked、aria-pressed" desc="墨色填充配黄色标记，深色主题反转。" cells={[<IconButton icon="i-grid" label="网格视图" defaultPressed />, <Switch defaultChecked>通知</Switch>, <Checkbox defaultChecked>启用</Checkbox>]} />
      <St name="禁用" en="disabled" desc="换为禁用色与禁用底，不用整体透明度。" cells={[<Button variant="primary" disabled>保存</Button>, <TextField size="sm" aria-label="编号" placeholder="编号" disabled />, <Checkbox defaultChecked disabled>启用</Checkbox>]} />
      <St name="错误" en="aria-invalid" desc="描边换为错误色，下方给出原因与图标。" msg cells={[null,
        <><TextField size="sm" error aria-label="编号" defaultValue="ID-03" /><div className="field-help field-err"><E.Icon name="s-error" />应为 ID- 加 6 位数字</div></>,
        <Checkbox error>同意服务条款</Checkbox>]} />
      <St name="加载" en="aria-busy" desc="文字换为加载圈，按钮保持宽度。" cells={[<Button variant="primary" loading>保存</Button>, <Select size="sm" options={[]} loading="加载中" />, <Switch defaultChecked loading>同步</Switch>]} />
    </div>
  </div>
);
