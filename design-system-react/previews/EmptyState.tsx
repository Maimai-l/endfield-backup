import * as React from 'react';
import { E, mount, Stage } from './_kit';
const { EmptyState, Button } = E;

mount(
  <Stage prov>
    <div className="empties">
      <EmptyState icon="i-box" title="还没有项目" action={<Button variant="primary" size="sm" icon="i-plus">新建项目</Button>}>新建第一个项目后，这里会显示它的进度与成员。</EmptyState>
      <EmptyState icon="i-search" title="没有匹配的结果" action={<Button size="sm">清除筛选</Button>}>当前筛选条件下没有项目。可以放宽状态或部门条件。</EmptyState>
      <EmptyState icon="i-inbox" title="数据加载失败" action={<Button size="sm" icon="i-refresh">重试</Button>}>同步服务未响应，页面保留了上次的数据。请检查网络后重试。</EmptyState>
    </div>
  </Stage>
);
