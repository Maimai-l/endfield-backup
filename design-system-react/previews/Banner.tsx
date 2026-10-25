import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { Banner, Link, EntryCard, PillButton, Dialog } = E;
const full = { width: '100%' } as React.CSSProperties;

mount(
  <Stage prov>
    <Row label="类型" style={full}>
      <div className="alerts">
        <Banner type="info" title="今晚 22:00 至 23:30 进行系统维护" onClose={() => undefined}>维护期间数据只读，请在此之前保存未提交的内容。</Banner>
        <Banner type="success" title="版本已更新至 4.2.1">共 18 个项目，全部完成迁移。</Banner>
        <Banner type="warning" title="存储用量已超过 85%">建议清理过期文件。<Link href="#c-alert">查看用量</Link></Banner>
        <Banner type="error" title="同步服务中断">最后一次同步为 14:02，6 个项目的数据已停止更新。</Banner>
      </div>
    </Row>
    <Row label="场景" style={full}>
      <div className="bn-scns">
        <div className="bn-scn"><div className="scn-h"><b>Page</b><span>页面级</span></div>
          <div className="bn-frame">
            <div className="bn-title"><ol className="crumbs"><li><a href="#c-alert">项目</a></li><li><span aria-current="page">产品部</span></li></ol><b>产品部</b></div>
            <Banner type="info" title="今晚 22:00 至 23:30 进行系统维护" onClose={() => undefined}>维护期间数据只读，请在此之前保存未提交的内容。</Banner>
            <EntryCard title="官网改版评审" meta="12 / 18" action={<PillButton size="sm">前往</PillButton>}>剩余 6 项待评审，预计 40 分钟。</EntryCard>
          </div>
          <p>影响整页时，放在标题区下方，作为正文的第一个元素。与标题区相隔 24，与其后的内容相隔 16；宽度与正文一致，不伸进页边距。</p>
        </div>
        <div className="bn-scn"><div className="scn-h"><b>Section</b><span>区块级</span></div>
          <div className="bn-frame"><div className="bn-col">
            <h4 className="bn-sec">成员权限</h4>
            <Banner type="warning" title="3 名成员的权限将在 10 月 31 日到期">到期后这些成员只能查看项目。<Link href="#c-alert">续期</Link></Banner>
            <ul className="list" aria-label="成员">
              <li className="li li--2" tabIndex={0}><span className="lead"><svg className="ic"><use href="#i-user" /></svg></span><span className="main"><b>成员 302</b><span>10 月 31 日到期</span></span><span className="trail">编辑</span></li>
              <li className="li li--2" tabIndex={0}><span className="lead"><svg className="ic"><use href="#i-user" /></svg></span><span className="main"><b>成员 418</b><span>长期有效</span></span><span className="trail">查看</span></li>
            </ul>
          </div></div>
          <p>只影响某个区块时，放在该区块的小标题与内容之间。与小标题相隔 12，与内容相隔 16；宽度与区块内容一致，内容限宽时提示条随之限宽。</p>
        </div>
        <div className="bn-scn"><div className="scn-h"><b>Dialog</b><span>对话框内</span></div>
          <div className="bn-dlg">
            <Dialog inline title="提交任务" confirmLabel="提交">
              <Banner type="error" title="审核人已离开项目">请重新选择审核人后再提交。</Banner>
              <p>提交后任务将进入审核，审核期间不可修改内容。</p>
            </Dialog>
          </div>
          <p>对话框与卡片内放在正文的第一个位置，与其后的内容相隔 16，宽度与正文一致；随容器一起关闭，不显示关闭按钮。</p>
        </div>
      </div>
    </Row>
  </Stage>
);
