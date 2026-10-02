import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { Tag, Status, TagDate } = E;

mount(
  <Stage>
    <Row label="变体" style={{ gap: 10, alignItems: 'center' }}>
      <Tag>中性</Tag><Tag variant="accent">强调</Tag><Tag status="ok">进行中</Tag><Tag status="warn">待处理</Tag><Tag status="err">已暂停</Tag>
      <Tag onRemove={() => undefined}>表格</Tag>
    </Row>
    <Row label="尺寸" style={{ gap: 10, alignItems: 'center' }}><Tag size="sm">sm 20</Tag><Tag>md 24</Tag><Tag size="sm" status="ok">进行中</Tag><Tag status="ok">进行中</Tag></Row>
    <Row label="状态" style={{ gap: 16, alignItems: 'center' }}><Status tone="ok">进行中</Status><Status tone="warn">待处理</Status><Status tone="err">已暂停</Status><Status tone="off">已归档</Status><span className="cap">表格与列表中使用，图标 16，已归档不带图标</span></Row>
    <Row label="源站"><TagDate type="公告" date="2026.09.30" /><span className="cap" style={{ alignSelf: 'center' }}>类型加日期组合，仅用于公告与版本记录</span></Row>
  </Stage>
);
