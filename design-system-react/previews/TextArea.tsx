import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { TextArea } = E;

mount(
  <Stage prov>
    <Row label="变体">
      <TextArea label="描述" maxLength={200} placeholder="补充背景与目标" style={{ width: 340 }}
        defaultValue="本季度目标是完成三项核心功能的上线，并把平均响应时间降到 200 毫秒以内。" />
      <TextArea label="结论" error="提交前需要填写结论" placeholder="必填" style={{ width: 340 }} />
    </Row>
  </Stage>
);
