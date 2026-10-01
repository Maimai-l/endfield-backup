import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { Checkbox, OptionGroup } = E;

mount(
  <Stage prov>
    <Row label="变体">
      <Checkbox>未选</Checkbox>
      <Checkbox defaultChecked>已选</Checkbox>
      <Checkbox indeterminate>部分选中</Checkbox>
      <Checkbox size="lg" defaultChecked>lg 20</Checkbox>
    </Row>
    <Row label="状态">
      <Checkbox className="is-hover">悬停</Checkbox>
      <Checkbox className="is-focus" defaultChecked>焦点</Checkbox>
      <Checkbox disabled>禁用</Checkbox>
      <Checkbox defaultChecked disabled>禁用已选</Checkbox>
      <Checkbox error>错误</Checkbox>
    </Row>
    <Row label="组">
      <OptionGroup legend="通知渠道">
        <Checkbox defaultChecked>站内消息</Checkbox>
        <Checkbox defaultChecked>邮件</Checkbox>
        <Checkbox>短信（每月上限 200 条）</Checkbox>
      </OptionGroup>
    </Row>
  </Stage>
);
