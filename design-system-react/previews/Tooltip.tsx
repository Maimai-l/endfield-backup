import * as React from 'react';
import { E, mount, Stage } from './_kit';
const { Tooltip, Button, Tag, Avatar, Icon } = E;

mount(
  <Stage prov>
    <div className="row"><span className="row-label">单行</span><div className="items tip-stage" style={{ gap: '24px 88px' }}>
      <div className="item"><Tooltip open content="刷新数据"><button className="btn btn--secondary ibtn" type="button" aria-label="刷新"><Icon name="i-refresh" /></button></Tooltip><span className="cap">纯文字</span></div>
      <div className="item"><Tooltip open content="搜索项目" shortcut="Ctrl K"><button className="btn btn--secondary ibtn" type="button" aria-label="搜索"><Icon name="i-search" /></button></Tooltip><span className="cap">带快捷键</span></div>
      <div className="item"><Tooltip content="500ms 后出现"><Button variant="ghost" size="sm">悬停或聚焦此处</Button></Tooltip><span className="cap">实际交互</span></div>
    </div></div>
    <div className="row"><span className="row-label">多行</span><div className="items tip-stage" style={{ gap: '24px 280px' }}>
      <div className="item"><Tooltip open placement="start" multiline content="距上次更新已 12 天，超过建议的 7 天周期"><Tag status="warn" tabIndex={0}>待处理</Tag></Tooltip><span className="cap">多行，最大宽 240</span></div>
      <div className="item"><Tooltip open placement="start" title="移动端应用" content="项目，运营部"><Avatar size={36} icon="i-box" tabIndex={0} /></Tooltip><span className="cap">双行，标题加类别</span></div>
    </div></div>
  </Stage>
);
