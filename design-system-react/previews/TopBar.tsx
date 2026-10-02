import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { TopBar, IconButton, Button, Avatar } = E;
const crumbs = [{ label: '项目', href: '#c-topbar' }, { label: '产品部' }];
const account = <Avatar size={28} label="账户：成员 302" onClick={() => undefined}>周</Avatar>;

mount(
  <Stage prov>
    <Row label="槽位" style={{ width: '100%' }}>
      <div className="tb-slots"><TopBar annotate title="产品部" crumbs={crumbs} search="搜索项目编号"
        actions={<><IconButton variant="ghost" icon="i-refresh" label="刷新" /><Button variant="primary">导出</Button></>} account={account} /></div>
    </Row>
    <Row label="组合" style={{ width: '100%', flexDirection: 'column', alignItems: 'stretch', gap: 24 }}>
      <div className="tb-combo"><div className="tb-frame"><TopBar title="项目总览" /></div><span className="cap">只有标题区</span></div>
      <div className="tb-combo"><div className="tb-frame"><TopBar title="产品部" crumbs={crumbs}
        actions={<><IconButton variant="ghost" icon="i-refresh" label="刷新" /><Button variant="primary" icon="i-plus">新建项目</Button></>} /></div><span className="cap">标题区带面包屑，操作区为刷新与一个主要按钮</span></div>
      <div className="tb-combo"><div className="tb-frame"><TopBar title="产品部" crumbs={crumbs} search="搜索项目编号"
        actions={<><IconButton variant="ghost" icon="i-refresh" label="刷新" /><IconButton variant="ghost" icon="i-sliders" label="参数设置" /></>} account={account} /></div><span className="cap">完整：标题区、搜索、两个图标操作、账户</span></div>
      <ul className="rules">
        <li>槽位从左到右固定为标题区、搜索、操作、账户；缺省的槽位直接省略，其余槽位位置不变。</li>
        <li>标题区占满剩余宽度，标题过长时截断；有上级页面时在标题上方放面包屑。</li>
        <li>操作区最多 3 个，图标按钮在前、文字按钮在后，至多一个主要按钮，间距 8。</li>
        <li>侧边导航已有账户入口时，顶栏不再放账户。</li>
      </ul>
    </Row>
  </Stage>
);
