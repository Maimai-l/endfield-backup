import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { MetricBadge } = E;

mount(
  <Stage>
    <Row label="示例" style={{ gap: 12 }}>
      <MetricBadge label="评审等级" value="02" infoLabel="评审等级说明" />
      <MetricBadge label="服务等级" value="A" infoLabel="服务等级说明" />
      <MetricBadge label="告警级别" value="3" infoLabel="告警级别说明" />
      <MetricBadge label="当前班次" value="B2" infoLabel="班次说明" />
    </Row>
  </Stage>
);
