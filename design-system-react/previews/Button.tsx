import * as React from 'react';
import { E, mount, Stage, Row, Item } from './_kit';
const { Button, CapsuleButton, TextField } = E;

mount(
  <Stage>
    <Row label="变体">
      <Item cap="primary 主要"><Button variant="primary">保存设置</Button></Item>
      <Item cap="accent 强调，每屏至多 1 个"><Button variant="accent">发布到线上</Button></Item>
      <Item cap="secondary 次要"><Button variant="secondary">导出</Button></Item>
      <Item cap="ghost 幽灵"><Button variant="ghost">取消</Button></Item>
      <Item cap="danger 危险"><Button variant="danger">删除项目</Button></Item>
    </Row>
    <Row label="胶囊">
      <Item cap="default"><CapsuleButton>前往</CapsuleButton></Item>
      <Item cap="hover"><CapsuleButton className="is-hover">前往</CapsuleButton></Item>
      <Item cap="in progress"><CapsuleButton busy>进行中</CapsuleButton></Item>
      <Item cap="disabled"><CapsuleButton disabled>前往</CapsuleButton></Item>
      <Item><span className="cap" style={{ maxWidth: '30ch' }}>用于列表与卡片中的跳转类操作</span></Item>
    </Row>
    <Row label="尺寸">
      <Item cap="sm 24"><Button variant="primary" size="sm">保存</Button></Item>
      <Item cap="md 32"><Button variant="primary">保存</Button></Item>
      <Item cap="lg 40"><Button variant="primary" size="lg">保存</Button></Item>
      <Item cap="图标加文字"><Button icon="i-plus">新建任务</Button></Item>
      <Item cap="文字加图标"><Button iconEnd="i-arrow-r">下一步</Button></Item>
    </Row>
    <Row label="场景" style={{ width: '100%' }}>
      <div className="scn-grid">
        <div className="scn"><div className="scn-h"><b>sm 24</b><span>密集区域</span></div>
          <div className="scn-demo"><Button size="sm">编辑</Button><Button variant="secondary" size="sm">删除</Button></div>
          <p>表格行内、卡片底部、对话框底部与筛选条</p></div>
        <div className="scn"><div className="scn-h"><b>md 32</b><span>默认尺寸</span></div>
          <div className="scn-demo"><TextField size="sm" icon="i-search" aria-label="搜索" placeholder="搜索" style={{ flex: '1 1 120px', minWidth: 0 }} /><Button variant="ghost" size="sm" icon="i-filter">筛选</Button><span className="sp" aria-hidden="true" /><Button variant="primary" icon="i-plus">新建</Button></div>
          <p>表单、页面标题区的操作；未特别说明时一律使用此尺寸</p></div>
        <div className="scn"><div className="scn-h"><b>lg 40</b><span>触屏与单一主流程</span></div>
          <div className="scn-demo" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 24 }}><TextField size="lg" aria-label="备注" placeholder="备注" /><div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}><Button variant="secondary" size="lg">稍后</Button><Button variant="primary" size="lg">提交</Button></div></div>
          <p>移动端底部操作栏、登录与首次设置页、空状态中的唯一主操作</p></div>
      </div>
      <p className="scn-rule">规则：胶囊输入框与方形按钮同排时，两者高度相差一档且相隔至少 24；只作用于输入框的操作（搜索、筛选、重置）用幽灵按钮。</p>
    </Row>
    <Row label="状态">
      <Item cap="default"><Button variant="primary">默认</Button></Item>
      <Item cap="hover"><Button variant="primary" className="is-hover">悬停</Button></Item>
      <Item cap="active"><Button variant="primary" className="is-hover is-active">按下</Button></Item>
      <Item cap="focus"><Button variant="primary" className="is-focus">焦点</Button></Item>
      <Item cap="disabled"><Button variant="primary" disabled>禁用</Button></Item>
      <Item cap="loading"><Button variant="primary" loading>加载中</Button></Item>
    </Row>
  </Stage>
);
