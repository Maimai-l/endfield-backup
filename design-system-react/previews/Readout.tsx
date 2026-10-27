import * as React from 'react';
import { E, mount, Stage, Row, Item } from './_kit';
const { Readout } = E;

mount(
  <Stage prov>
    <Row label="示例">
      <Item cap="数字 Novecento，编号与域名 Gilroy，中文 Sans" style={{ paddingTop: 4 }}>
        <Readout style={{ width: 280 }} items={[
          { label: '地址', value: 'mcp.local', kind: 'code' },
          { label: '端口', value: '8400', kind: 'num' },
          { label: '连接数', value: '3', kind: 'num' },
          { label: '最近响应', value: '12:04:31', kind: 'num' },
          { label: '所属分组', value: '渲染节点' },
        ]} />
      </Item>
    </Row>
  </Stage>
);
