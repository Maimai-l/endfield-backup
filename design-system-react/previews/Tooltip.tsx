import * as React from 'react';
import { E, mount, Stage } from './_kit';
const { Tooltip, Avatar, Icon } = E;

mount(
  <Stage prov>
    <div className="row"><span className="row-label" style={{ paddingTop: 46 }}>单行</span><div className="items tip-stage tip-grid">
      <div className="item"><Tooltip open content="刷新数据"><button className="btn btn--secondary ibtn" type="button" aria-label="刷新"><Icon name="i-refresh" /></button></Tooltip><span className="cap">纯文字</span></div>
      <div className="item"><Tooltip open content="搜索项目" shortcut="Ctrl K"><button className="btn btn--secondary ibtn" type="button" aria-label="搜索"><Icon name="i-search" /></button></Tooltip><span className="cap">带快捷键</span></div>
      <div className="item"><Tooltip content="更多操作"><button className="btn btn--secondary ibtn" type="button" aria-label="更多操作"><Icon name="i-more" /></button></Tooltip><span className="cap">实际交互，悬停 500ms 后出现</span></div>
    </div></div>
    <div className="row"><span className="row-label" style={{ paddingTop: 78 }}>多行</span><div className="items tip-stage tip-grid" style={{ paddingTop: 76 }}>
      <div className="item"><Tooltip open placement="start" multiline content="数据距上次更新已 12 天，超过建议的 7 天更新周期，请尽快同步。"><button className="btn btn--secondary ibtn" type="button" aria-label="同步状态"><Icon name="i-info-plain" /></button></Tooltip><span className="cap">多行，最大宽 240</span></div>
      <div className="item" style={{ gridColumn: 3 }}><Tooltip open placement="start" title="移动端应用" content="项目，运营部"><Avatar size={32} icon="i-box" tabIndex={0} /></Tooltip><span className="cap">双行，标题加类别</span></div>
    </div></div>
  </Stage>
);
