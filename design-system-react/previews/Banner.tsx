import * as React from 'react';
import { E, mount, Stage } from './_kit';
const { Banner, Link } = E;

mount(
  <Stage prov>
    <div className="alerts">
      <Banner type="info" title="今晚 22:00 至 23:30 进行系统维护" onClose={() => undefined}>维护期间数据只读，请在此之前保存未提交的内容。</Banner>
      <Banner type="success" title="版本已更新至 4.2.1">共 18 个项目，全部完成迁移。</Banner>
      <Banner type="warning" title="存储用量已超过 85%">建议清理过期文件。<Link href="#c-alert">查看用量</Link></Banner>
      <Banner type="error" title="同步服务中断">最后一次同步为 14:02，6 个项目的数据已停止更新。</Banner>
    </div>
  </Stage>
);
