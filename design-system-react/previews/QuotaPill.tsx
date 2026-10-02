import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { QuotaPill } = E;

mount(
  <Stage>
    <Row label="示例" style={{ gap: 12 }}>
      <QuotaPill icon="i-box" value={820} max={1000} unit="GB" actionLabel="扩容存储" />
      <QuotaPill icon="i-user" value={18} max={20} unit="席位" actionLabel="增加席位" />
      <QuotaPill icon="i-bolt" value={235} max={235} actionLabel="补充调用配额" />
      <QuotaPill icon="i-list" value={1300} unit="元" actionLabel="充值预算" />
    </Row>
  </Stage>
);
