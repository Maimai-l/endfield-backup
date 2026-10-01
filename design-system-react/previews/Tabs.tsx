import * as React from 'react';
import { E, mount, Stage, Row, Item } from './_kit';
const { Tabs, SegmentedControl } = E;

mount(
  <Stage>
    <Row label="主标签" style={{ width: '100%' }}>
      <Tabs variant="main" ariaLabel="手册" defaultValue="daily" items={[
        { value: 'node', label: '节点', icon: 'i-doc' },
        { value: 'daily', label: '日常', icon: 'i-grid' },
        { value: 'index', label: '索引', icon: 'i-list' },
        { value: 'train', label: '训练', icon: 'i-sliders', badge: true },
      ]} />
    </Row>
    <Row label="线型" style={{ width: '100%' }}>
      <Tabs variant="line" style={{ width: '100%' }} items={[
        { value: 'o', label: '概览' }, { value: 'a', label: '动态', count: 128 }, { value: 'c', label: '评论', count: 3 },
        { value: 's', label: '设置' }, { value: 'r', label: '归档', disabled: true },
      ]} />
    </Row>
    <Row label="区块">
      <Tabs variant="block" items={[{ value: 'd', label: '资料' }, { value: 'p', label: '计划' }, { value: 'a', label: '归档' }]} />
    </Row>
    <Row label="分段">
      <Item><SegmentedControl ariaLabel="时间范围" defaultValue="7d" options={[{ value: '24h', label: '24 小时' }, { value: '7d', label: '7 天' }, { value: '30d', label: '30 天' }]} /></Item>
      <Item><SegmentedControl ariaLabel="视图" options={[{ value: 'list', icon: 'i-list', ariaLabel: '列表' }, { value: 'grid', icon: 'i-grid', ariaLabel: '网格' }]} /></Item>
    </Row>
  </Stage>
);
