import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { Surface, Glass, Progress, Button } = E;

const archive = [
  ['PRJ-0430', '接口限流策略', '2026.09.30'], ['PRJ-0412', '权限模型重构', '2026.09.28'], ['PRJ-0398', '数据导出格式统一', '2026.09.14'],
  ['PRJ-0371', '成员邀请流程', '2026.08.30'], ['PRJ-0355', '通知中心', '2026.08.11'], ['PRJ-0342', '审计日志', '2026.07.29'],
];

mount(
  <Stage prov>
    <Row label="黄色整面">
      <Surface tone="brand" contour numeral="04" className="sf sf-hero">
        <div className="sf-copy">
          <span className="sf-eyebrow">Q4 RELEASE</span>
          <h2 className="sf-title">第四季度版本</h2>
          <p className="sf-text">合并 18 个项目，统一权限与导出格式。</p>
          <Progress label="发布进度" value={72} />
          <div className="sf-acts"><Button variant="primary">查看详情</Button></div>
        </div>
      </Surface>
    </Row>
    <Row label="墨色整面">
      <Surface tone="ink" className="sf sf-arch">
        <div className="sf-rows">
          {archive.map(([id, t, d]) => <div key={id} className="sf-row"><span className="id">{id}</span><span className="t">{t}</span><span className="d">{d}</span></div>)}
        </div>
        <Glass as="nav" className="sf-bar"><b>归档</b><span aria-current="page">全部</span><span>本季度</span><span>已关闭</span></Glass>
      </Surface>
    </Row>
  </Stage>
);
