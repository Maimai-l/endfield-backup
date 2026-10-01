import * as React from 'react';
import { E, mount, Stage, Row, Item } from './_kit';
const { Pagination, PageCapsule } = E;

mount(
  <Stage>
    <Row label="完整"><Pagination total={248} defaultPage={3} /></Row>
    <Row label="简洁">
      <Item cap="首页，上一页禁用"><Pagination variant="simple" total={250} /></Item>
      <Item cap="源站胶囊，轮播"><PageCapsule total={6} defaultPage={3} /></Item>
    </Row>
  </Stage>
);
