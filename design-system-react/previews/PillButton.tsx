import * as React from 'react';
import { E, mount, Stage, Row, Item } from './_kit';
const { ConfirmButton, PillButton } = E;
const w = { width: 240 } as React.CSSProperties;

mount(
  <Stage>
    <Row label="确认">
      <Item cap="default"><ConfirmButton style={w}>交易</ConfirmButton></Item>
      <Item cap="hover"><ConfirmButton style={w} className="is-hover">开始追踪</ConfirmButton></Item>
      <Item cap="disabled"><ConfirmButton style={w} disabled>交易</ConfirmButton></Item>
    </Row>
    <Row label="实底">
      <Item cap="default"><PillButton icon="i-menu">事务总览</PillButton></Item>
      <Item cap="muted"><PillButton variant="muted" icon="n-calendar">收支简报</PillButton></Item>
      <Item cap="hover"><PillButton icon="i-menu" className="is-hover">事务总览</PillButton></Item>
      <Item cap="disabled"><PillButton icon="i-menu" disabled>事务总览</PillButton></Item>
    </Row>
    <Row label="小号">
      <Item cap="带图标"><PillButton size="sm" icon="i-pin">查看位置</PillButton></Item>
      <Item cap="纯文字"><PillButton size="sm">更换货品</PillButton></Item>
      <Item cap="disabled"><PillButton size="sm" icon="i-pin" disabled>查看位置</PillButton></Item>
    </Row>
  </Stage>
);
