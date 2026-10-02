import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { Switch, VerticalSwitch } = E;
const opts: [string, string] = ['二维', '三维'];

mount(
  <Stage prov>
    <Row label="变体">
      <Switch>自动更新</Switch>
      <Switch defaultChecked>消息通知</Switch>
      <Switch size="lg" defaultChecked>夜间模式</Switch>
    </Row>
    <Row label="状态">
      <Switch className="is-hover">悬停</Switch>
      <Switch className="is-focus" defaultChecked>焦点</Switch>
      <Switch disabled>禁用</Switch>
      <Switch defaultChecked disabled>禁用开启</Switch>
      <Switch defaultChecked loading>提交中</Switch>
    </Row>
    <Row label="竖向" style={{ gap: '20px 48px', alignItems: 'flex-start' }}>
      <VerticalSwitch options={opts} label="三维视图" />
      <VerticalSwitch options={opts} label="三维视图" defaultChecked />
      <VerticalSwitch options={opts} label="三维视图" defaultChecked disabled />
      <VerticalSwitch options={opts} label="三维视图" defaultChecked size="lg" />
    </Row>
  </Stage>
);
