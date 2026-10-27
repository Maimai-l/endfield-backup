import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { StatusCard, Chain } = E;

mount(
  <Stage prov>
    <Row label="链路" style={{ width: '100%' }}>
      <Chain links={[true, false, false]}>
        <StatusCard index="01" code="Client" name="客户端" state="已连接" action="断开"
          readout={[{ label: '地址', value: 'localhost', kind: 'code' }, { label: '请求', value: '1,284', kind: 'num' }]} />
        <StatusCard index="02" code="Gateway" name="网关" state="运行中" action="停止"
          readout={[{ label: '端口', value: '8400', kind: 'num' }, { label: '连接数', value: '3', kind: 'num' }]} />
        <StatusCard index="03" code="Plugin" name="插件" state="未连接" tone="off" action="连接"
          readout={[{ label: '版本', value: '1.4.2', kind: 'num' }, { label: '最近连接', value: '09:12', kind: 'num' }]} />
        <StatusCard index="04" code="Render" name="渲染服务" state="已停止" tone="off" action="启动"
          readout={[{ label: '端口', value: '9876', kind: 'num' }, { label: '队列', value: '0', kind: 'num' }]} />
      </Chain>
    </Row>
    <Row label="并列" style={{ width: '100%' }}>
      <div className="cards" style={{ gridTemplateColumns: 'repeat(3,minmax(0,1fr))' }}>
        <StatusCard code="Health" name="接口检查" state="正常" action="检测"
          readout={[{ label: '响应码', value: '200', kind: 'num' }, { label: '最近检测', value: '12:04', kind: 'num' }]} />
        <StatusCard code="Health" name="存储检查" state="异常" tone="err" action="检测"
          readout={[{ label: '响应码', value: '502', kind: 'num' }, { label: '最近检测', value: '12:04', kind: 'num' }]} />
        <StatusCard code="Health" name="队列检查" state="未检测" tone="off" action="检测"
          readout={[{ label: '响应码', value: '无' }, { label: '最近检测', value: '无' }]} />
      </div>
    </Row>
  </Stage>
);
