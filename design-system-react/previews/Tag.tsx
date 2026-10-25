import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { Tag, Status, TagDate, PillTag } = E;

mount(
  <Stage>
    <Row label="变体" style={{ gap: 10, alignItems: 'center' }}>
      <Tag>中性</Tag><Tag variant="accent">强调</Tag>
      <Tag onRemove={() => undefined}>表格</Tag>
    </Row>
    <Row label="胶囊" style={{ gap: 8, alignItems: 'center' }}><PillTag icon="i-bolt">变废为宝</PillTag><PillTag icon="i-box">求生智慧</PillTag><PillTag icon="i-bolt" off>救援回应</PillTag><span className="cap" style={{ marginLeft: 16 }}>效果与能力：生效为实底，未生效为描边</span></Row>
    <Row label="尺寸" style={{ gap: 10, alignItems: 'center' }}><Tag size="sm">sm 20</Tag><Tag>md 24</Tag></Row>
    <Row label="状态" style={{ gap: 16, alignItems: 'center' }}><Status>进行中</Status><Status>待处理</Status><Status tone="err">已逾期</Status><Status tone="off">已归档</Status></Row>
    <Row label="源站"><TagDate type="公告" date="2026.09.30" /><span className="cap" style={{ alignSelf: 'center' }}>类型加日期组合，仅用于公告与版本记录</span></Row>
  </Stage>
);
