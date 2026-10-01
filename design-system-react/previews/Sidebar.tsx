import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { Sidebar, TopBar, IconButton, Avatar, Skeleton } = E;
type Items = React.ComponentProps<typeof Sidebar>['items'];

const three: Items = [
  { value: 'home', label: '总览', icon: 'n-home' }, { value: 'prj', label: '项目', icon: 'n-operator' }, { value: 'task', label: '任务', icon: 'n-notice' },
];
const five: Items = [
  { value: 'home', label: '总览', icon: 'n-home' }, { value: 'prj', label: '项目', icon: 'n-operator' }, { value: 'task', label: '任务', icon: 'n-notice', badge: true },
  { value: 'arc', label: '归档', icon: 'n-lore' }, { value: 'cal', label: '排班', icon: 'n-calendar' },
];
const grouped: Items = [
  { group: '运营' }, { value: 'home', label: '总览', icon: 'n-home' }, { value: 'prj', label: '项目', icon: 'n-operator' }, { value: 'task', label: '任务', icon: 'n-notice' },
  { group: '管理' }, { value: 'arc', label: '归档', icon: 'n-lore' }, { value: 'cal', label: '排班', icon: 'n-calendar' },
];
const tools2 = [{ label: '账户', icon: 'i-user' as const }, { label: '设置', icon: 'i-sliders' as const }];

function Part({ title, req, h, note, render }: { title: string; req?: boolean; h: number; note: string; render: (open: boolean) => React.ReactNode }) {
  return (
    <div className="snp-card">
      <div className="snp-h">{title}<span className={req ? 'need is-req' : 'need'}>{req ? '必需' : '可选'}</span></div>
      <div className="snp-pair">
        <div className="snp" style={{ height: h }} aria-hidden="true">{render(false)}</div>
        <div className="snp snp--open" style={{ height: h }} aria-hidden="true">{render(true)}</div>
      </div>
      <p>{note}</p>
    </div>
  );
}

function Shell({ items, tools, cap }: { items: Items; tools?: typeof tools2; cap: string }) {
  return (
    <div className="sn-combo">
      <div className="app app--sm">
        <Sidebar name="Ops Console" items={items} tools={tools} defaultValue="prj" />
        <div className="app-main"><TopBar title="产品部" />
          <div className="app-body" aria-hidden="true"><Skeleton width="50%" height={12} /><Skeleton width="100%" height={64} /><Skeleton width="100%" height={120} /></div></div>
      </div>
      <span className="cap">{cap}</span>
    </div>
  );
}

mount(
  <Stage>
    <Row label="元素" style={{ width: '100%' }}>
      <div className="sn-parts">
        <Part title="标识区" req h={64} note="左上角黄色标记兼作固定展开开关；展开后显示产品名。高 64，始终位于顶部。"
          render={(o) => <Sidebar name="Ops Console" items={[]} open={o} parts={['head']} />} />
        <Part title="导航项" req h={150} note="依次为默认、当前、悬停加提醒角标。项高 44，同一时刻只有一个当前项；指示块随当前项移动。"
          render={(o) => <Sidebar name="Ops Console" open={o} parts={['list']} defaultValue="prj" items={[
            { value: 'home', label: '总览', icon: 'n-home' }, { value: 'prj', label: '项目', icon: 'n-operator' }, { value: 'task', label: '任务', icon: 'n-notice', badge: true, className: 'is-hover' }]} />} />
        <Part title="分组标题" h={160} note="导航项超过 6 个时使用。高 28；收起时显示为 1px 短线，展开时显示组名。"
          render={(o) => <Sidebar name="Ops Console" open={o} parts={['list']} defaultValue="prj" items={[
            { group: '运营' }, { value: 'prj', label: '项目', icon: 'n-operator' }, { group: '管理' }, { value: 'arc', label: '归档', icon: 'n-lore' }]} />} />
        <Part title="底部工具区" h={112} note="放账户与设置等全局入口，1 至 3 个按钮，贴底 16。没有全局入口时整块省略。"
          render={(o) => <Sidebar name="Ops Console" items={[]} open={o} parts={['tools']} tools={tools2} />} />
      </div>
    </Row>
    <Row label="组合" style={{ width: '100%', flexDirection: 'column', alignItems: 'stretch' }}>
      <div className="sn-combos">
        <Shell items={three} cap="最少：标识区加 3 个导航项，无底部工具区" />
        <Shell items={five} tools={tools2} cap="标准：5 个导航项加底部工具区（账户、设置）" />
        <Shell items={grouped} tools={[tools2[1]]} cap="分组：两组共 5 项，底部工具区只有设置" />
      </div>
      <ul className="rules">
        <li>标识区与导航列表必需；分组标题与底部工具区可选，省略时不留空位，列表与其余元素位置不变。</li>
        <li>导航列表 2 至 8 项，超过 6 项时分组；更多入口放到二级页面，不继续加长侧栏。</li>
        <li>列表从顶部 72 开始，项高 44；底部工具区贴底 16，与列表之间至少留 16，空间不足时列表滚动、底部工具区固定。</li>
        <li>收起宽 64 与展开宽 224 对所有组合相同；展开面板覆盖内容，不推挤页面。</li>
      </ul>
    </Row>
    <Row label="整页" style={{ width: '100%', flexDirection: 'column', alignItems: 'stretch' }}>
      <div className="app">
        <Sidebar name="Ops Console" defaultValue="prj" items={[five[0], five[1], { ...five[2], badge: false }, five[3], five[4]]}
          tools={[{ label: '账户', icon: 'i-user' }, { label: '参数设置', icon: 'i-sliders' }]} />
        <div className="app-main">
          <TopBar title="产品部" crumbs={[{ label: '项目', href: '#c-nav' }, { label: '产品部' }]} search="搜索项目编号"
            actions={<IconButton variant="ghost" size="sm" icon="i-refresh" label="刷新" tooltip="below" />}
            account={<Avatar size={28} label="账户：成员 302" onClick={() => undefined}>周</Avatar>} />
          <div className="app-body" aria-hidden="true">
            <Skeleton width="30%" height={14} />
            <div style={{ display: 'flex', gap: 12 }}><span className="skel" style={{ flex: 1, height: 72 }} /><span className="skel" style={{ flex: 1, height: 72 }} /><span className="skel" style={{ flex: 1, height: 72 }} /></div>
            <Skeleton width="100%" height={160} />
          </div>
        </div>
      </div>
      <p className="cap" style={{ margin: 0 }}>侧边导航与顶栏组合。指针移入左侧栏或用 Tab 聚焦时展开，移出后收起；点击左上角标记可固定展开。点击导航项，指示块平移到该项。</p>
    </Row>
  </Stage>
);
