import * as React from 'react';
import { E, mount } from './_kit';
const { Card, StatCard, EntryCard, CapsuleButton, Tag, Status } = E;

mount(
  <div className="stage">
    <div style={{ width: '100%' }}>
      <EntryCard title="官网改版评审" meta="12 / 18" action={<CapsuleButton>前往</CapsuleButton>}>剩余 6 项待评审，预计 40 分钟。</EntryCard>
      <EntryCard title="季度规划" meta="3 / 3" action={<CapsuleButton busy>已完成</CapsuleButton>}>本周规划项已全部完成。</EntryCard>
      <EntryCard off title="上线复盘" meta="未开放" action={<CapsuleButton disabled>查看</CapsuleButton>}>归档期间不生成复盘记录。</EntryCard>
    </div>
    <div className="cards">
      <Card eyebrow="Static" title="维护说明" footer={<><code>DOC-000031</code><Tag size="sm">文档</Tag></>}>每周一同步进度，每月底整理归档。</Card>
      <Card eyebrow="Interactive" title="官网改版" href="#c-card" footer={<><code>PRJ-0142</code><Status tone="warn">待处理</Status></>}>产品部</Card>
      <Card eyebrow="Selectable" title="标准评审模板" selectable defaultSelected footer={<code>TPL-0007</code>}>12 个检查项，预计 25 分钟。</Card>
      <StatCard eyebrow="Readout" label="今日访问" value={18406} unit="次" delta={{ text: '+6.2% 较昨日', direction: 'up' }} />
      <Card eyebrow="Disabled" title="已归档" disabled>该项目已归档，数据仅供查阅。</Card>
    </div>
  </div>
);
