import * as React from 'react';
import { E, mount } from './_kit';
const { ColorLine } = E;

mount(
  <div style={{ padding: 16 }}><div className="deco-demo">
    <figure><ColorLine /><figcaption>横向，宽 196、高 4；粉、绿各 42，其余为黄</figcaption></figure>
    <figure><ColorLine orientation="vertical" /><figcaption>纵向，宽 4、高 84；用于侧栏或卡片边角</figcaption></figure>
  </div></div>
);
