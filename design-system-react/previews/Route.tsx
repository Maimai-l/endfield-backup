import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { Route, RouteStation, PillButton } = E;
const cols = '232px 196px 196px';
const full = { width: '100%' } as React.CSSProperties;

mount(
  <Stage prov>
    <Row label="接通" style={full}>
      <Route columns={cols}>
        <RouteStation name="Blender" meta="bmcp.maimaiqiu.work" result="正常" />
        <RouteStation meta=":8080" state="运行中" action={<PillButton size="sm" variant="muted">停止</PillButton>} />
        <RouteStation meta="Blender 插件 :9876" state="已连接" next="none" />
      </Route>
    </Row>
    <Row label="断开" style={full}>
      <Route columns={cols}>
        <RouteStation name="Unity" meta="umcp.maimaiqiu.work" result="不通" resultTone="err" note="断在服务" next="off" />
        <RouteStation meta=":8082" state="已停止" tone="err" action={<PillButton size="sm">启动</PillButton>} next="off" down />
        <RouteStation meta="Unity 编辑器 :6400" state="未连接" tone="off" next="none" down />
      </Route>
    </Row>
    <Row label="两段" style={full}>
      <Route columns={cols}>
        <RouteStation name="命令执行" meta="xmcp.maimaiqiu.work" result="正常" />
        <RouteStation meta=":8084" state="运行中" action={<PillButton size="sm" variant="muted">停止</PillButton>} next="none" />
      </Route>
    </Row>
    <Row label="上游断开" style={full}>
      <Route columns={cols} lead={40} cut>
        <RouteStation name="临时授权" meta="tmcp.maimaiqiu.work" result="不通" resultTone="err" note="断在外网" next="off" down />
        <RouteStation meta=":8086" state="运行中" next="off" down />
        <RouteStation meta="生效 1，待确认 2" state="授权管理" tone="off" next="none" down />
      </Route>
    </Row>
  </Stage>
);
