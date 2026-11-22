import * as React from 'react';
import { E, mount, Stage, Row, Item } from './_kit';
const { KeyFigure } = E;

mount(
  <Stage prov>
    <Row label="示例" style={{ gap: '24px 96px' }}>
      <Item cap="带分母"><KeyFigure en="Routes Online" label="通畅线路" value="3" total="4" /></Item>
      <Item cap="单个数"><KeyFigure en="Active Grants" label="生效中的授权" value="1" /></Item>
    </Row>
  </Stage>
);
