import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { Progress } = E;
const g = { gap: '24px 40px' };

mount(
  <Stage prov>
    <Row label="变体" style={g}>
      <Progress label="版本上传" value={64} />
      <Progress label="资源加载" value={38} frame />
      <Progress label="正在校验文件" valueText="校验中" />
    </Row>
    <Row label="状态" style={g}>
      <Progress label="导出报表" value={100} status="done" note="已完成，共 12 个文件" />
      <Progress label="同步 B-11" value={72} status="error" state="已中止" note="项目无响应" />
      <Progress label="批量导入" value={45} status="paused" note="已暂停" />
    </Row>
  </Stage>
);
