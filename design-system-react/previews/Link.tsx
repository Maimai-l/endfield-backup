import * as React from 'react';
import { E, mount, Stage, Row, Item } from './_kit';
const { Link } = E;

mount(
  <Stage prov>
    <Row label="行内"><p className="prose">官网改版已进入第三周，进度落后计划两天。请查看 <Link href="#c-link">进度记录</Link> 并在本周内调整排期。</p></Row>
    <Row label="独立"><Item cap="standalone"><Link standalone href="#c-link">查看全部项目</Link></Item></Row>
    <Row label="状态">
      <Item cap="default"><Link href="#c-link">进度记录</Link></Item>
      <Item cap="hover"><Link href="#c-link" className="is-hover">进度记录</Link></Item>
      <Item cap="focus"><Link href="#c-link" className="is-focus">进度记录</Link></Item>
      <Item cap="disabled"><Link disabled>进度记录</Link></Item>
    </Row>
  </Stage>
);
