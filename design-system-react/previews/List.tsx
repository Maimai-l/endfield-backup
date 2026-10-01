import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { List, EntryMenu } = E;

mount(
  <Stage prov>
    <Row label="入口菜单">
      <EntryMenu ariaLabel="栏目" defaultValue="lore" items={[
        { value: 'notice', label: '通知公告', icon: 'n-notice' }, { value: 'cal', label: '活动日历', icon: 'n-calendar' },
        { value: 'lore', label: '资料档案', icon: 'n-lore' }, { value: 'data', label: '数据汇总', icon: 'i-grid' }, { value: 'acct', label: '账户设置', icon: 'i-user' },
      ]} />
    </Row>
    <Row label="双行" style={{ width: '100%' }}>
      <List variant="two-line" selectable ariaLabel="文件" defaultValue="b" items={[
        { value: 'a', icon: 'i-doc', title: '季度报告', subtitle: '9 月 30 日更新', trailing: '2.4 MB' },
        { value: 'b', icon: 'i-list', title: '评审纪要', subtitle: '12 条意见', trailing: '14:05' },
        { value: 'c', icon: 'i-user', title: '成员 ID-000240', subtitle: '3 项进行中', className: 'is-hover' },
        { value: 'd', icon: 'i-doc', title: '旧版说明', subtitle: '已归档', disabled: true },
      ]} />
    </Row>
    <Row label="单行与紧凑" style={{ width: '100%', gap: 24, alignItems: 'flex-start' }}>
      <List style={{ maxWidth: 300 }} items={[
        { value: 'a', icon: 'i-doc', title: '季度报告.pdf', trailing: '2.4 MB' }, { value: 'b', icon: 'i-doc', title: '评审纪要.docx', trailing: '860 KB' },
      ]} />
      <List variant="compact" style={{ maxWidth: 260 }} value="b" items={[
        { value: 'a', title: '同步完成', trailing: '14:20' }, { value: 'b', title: '导出报告', trailing: '14:05' }, { value: 'c', title: '新增成员', trailing: '13:48' },
      ]} />
    </Row>
  </Stage>
);
