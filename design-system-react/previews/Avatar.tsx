import * as React from 'react';
import { E, mount, Stage, Row, Item } from './_kit';
const { Avatar, AvatarStack } = E;
const c = { justifyItems: 'center' } as React.CSSProperties;

mount(
  <Stage>
    <Row label="尺寸">
      {[24, 32, 40, 64].map((s) => <Item key={s} cap={s} style={c}><Avatar size={s}>周</Avatar></Item>)}
    </Row>
    <Row label="变体">
      <Item cap="图片" style={c}><Avatar className="av--img" alt="头像图片" /></Item>
      <Item cap="文字" style={c}><Avatar>林</Avatar></Item>
      <Item cap="占位" style={c}><Avatar alt="未设置头像" /></Item>
      <Item cap="在线" style={c}><Avatar status="online">陈</Avatar></Item>
      <Item cap="已归档" style={c}><Avatar status="off">吴</Avatar></Item>
      <Item cap="可点击 hover" style={c}><Avatar className="is-hover" label="账户：成员 302" onClick={() => undefined}>周</Avatar></Item>
      <Item cap="堆叠" style={c}><AvatarStack more={4}><Avatar size={32}>周</Avatar><Avatar size={32}>林</Avatar><Avatar size={32}>陈</Avatar></AvatarStack></Item>
    </Row>
  </Stage>
);
