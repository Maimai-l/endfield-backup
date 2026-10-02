import * as React from 'react';
import { E, mount, Stage, Row, Item } from './_kit';
const { TextField } = E;
const w = { width: 200 };

mount(
  <Stage prov>
    <Row label="变体">
      <TextField label="名称" required placeholder="例如：季度报告" help="同一目录内不可重名" />
      <TextField label="搜索" icon="i-search" clearable defaultValue="季度" />
      <TextField label="容量上限" defaultValue="500" inputMode="numeric" unit="MB" />
      <TextField label="编号" filled placeholder="ID-000000" />
    </Row>
    <Row label="尺寸">
      <Item><TextField size="sm" aria-label="sm" placeholder="sm 24" style={{ width: 180 }} /></Item>
      <Item><TextField aria-label="md" placeholder="md 32" style={{ width: 180 }} /></Item>
      <Item><TextField size="lg" aria-label="lg" placeholder="lg 40" style={{ width: 180 }} /></Item>
    </Row>
    <Row label="状态">
      <div className="field" style={w}><span className="cap">hover</span><TextField className="is-hover" aria-label="hover" placeholder="编号" /></div>
      <div className="field" style={w}><span className="cap">focus</span><TextField className="is-focus" aria-label="focus" defaultValue="ID-000302" /></div>
      <div className="field" style={w}><span className="cap">error</span><TextField error="应为 ID- 加 6 位数字" aria-label="error" defaultValue="ID-03" /></div>
      <div className="field" style={w}><span className="cap">disabled</span><TextField aria-label="disabled" placeholder="不可编辑" disabled /></div>
      <div className="field" style={w}><span className="cap">readonly</span><TextField aria-label="readonly" defaultValue="ID-000302" readOnly /></div>
    </Row>
  </Stage>
);
