import * as React from 'react';
import { E, mount, Stage, Row, Item } from './_kit';
const { Loading, Skeleton } = E;

mount(
  <Stage prov>
    <Row label="旋转">
      <Item cap="16"><Loading size={16} /></Item>
      <Item cap="20"><Loading size={20} /></Item>
      <Item cap="32"><Loading size={32} /></Item>
      <Item cap="带文字"><Loading size={16} label="正在读取 18 个文件" /></Item>
    </Row>
    <Row label="骨架" style={{ width: '100%' }}>
      <div className="card" style={{ width: 280 }} aria-busy="true"><Skeleton width="40%" height={10} /><Skeleton width="75%" height={16} /><Skeleton width="100%" /><Skeleton width="90%" /></div>
      <div className="list" style={{ maxWidth: 320 }} aria-busy="true">
        {[['60%', '40%'], ['70%', '30%']].map(([a, b], i) => (
          <div key={i} className="li li--2"><Skeleton width={40} height={40} round /><span style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}><Skeleton width={a} /><Skeleton width={b} height={10} /></span></div>
        ))}
      </div>
    </Row>
  </Stage>
);
