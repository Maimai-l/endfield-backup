import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { Plate, Readout, PillButton, Progress } = E;
const col = { display: 'flex', flexDirection: 'column' } as React.CSSProperties;
const foot = { marginTop: 'auto', alignSelf: 'flex-start' } as React.CSSProperties;

mount(
  <Stage prov>
    <Row label="示例" style={{ gap: 24, alignItems: 'stretch', width: '100%' }}>
      <Plate style={{ ...col, width: 168, minHeight: 240 }}>
        <span className="kf-en">Tunnel</span>
        <span className="cs-name" style={{ marginTop: 0 }}>外网访问</span>
        <span className="cs-state">已开启</span>
        <Readout style={{ marginTop: 16 }} items={[{ label: '隧道连接', value: '4', kind: 'num' }]} />
        <PillButton size="sm" style={foot}>关闭</PillButton>
      </Plate>
      <Plate style={{ ...col, flex: 1, minWidth: 0, gap: 16 }}>
        <div><span className="cs-state" style={{ marginTop: 0, font: '20px/28px var(--font-medium)' }}>blender-assets</span></div>
        <Progress style={{ width: 'auto' }} label="剩余时间" value={70} valueText="42:10" />
        <Progress style={{ width: 'auto' }} label="已用次数" value={35} valueText="7/20" />
        <PillButton size="sm" style={foot}>查看记录</PillButton>
      </Plate>
    </Row>
  </Stage>
);
