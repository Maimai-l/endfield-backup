import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { Radio, OptionGroup } = E;

mount(
  <Stage prov>
    <Row label="组" style={{ gap: '20px 48px' }}>
      <OptionGroup legend="评审频率">
        <Radio name="freq">每班一次</Radio>
        <Radio name="freq" defaultChecked>每日一次</Radio>
        <Radio name="freq">每周一次</Radio>
        <Radio name="freq" disabled>按需（需管理员权限）</Radio>
      </OptionGroup>
      <OptionGroup legend="状态示例">
        <Radio name="r2" className="is-hover">悬停</Radio>
        <Radio name="r2" className="is-focus" defaultChecked>焦点已选</Radio>
        <Radio name="r3" error>错误</Radio>
        <Radio name="r4" size="lg" defaultChecked>lg 20</Radio>
      </OptionGroup>
    </Row>
  </Stage>
);
