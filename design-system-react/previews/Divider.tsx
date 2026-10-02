import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { Divider } = E;

mount(
  <Stage>
    <Row label="水平" style={{ width: '100%' }}><Divider /></Row>
    <Row label="带文字" style={{ width: '100%' }}><Divider variant="label">以下为已归档记录</Divider></Row>
    <Row label="区块" style={{ width: '100%' }}><Divider variant="section">Archive</Divider></Row>
    <Row label="垂直"><div className="vdemo"><span>PRJ-0142</span><Divider variant="vertical" /><span>产品部</span><Divider variant="vertical" /><span>12 项</span></div></Row>
  </Stage>
);
