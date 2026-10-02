import * as React from 'react';
import { E, mount, Row } from './_kit';
const { Toast, ToastProvider, useToast, Button } = E;

function Demo() {
  const show = useToast();
  return (
    <Row label="演示">
      <Button size="sm" onClick={() => show('success', '任务 TK-0930 已关闭', '撤销')}>触发成功提示</Button>
      <Button size="sm" onClick={() => show('error', '保存失败：网络连接已断开', '重试')}>触发错误提示</Button>
      <span className="cap">出现在页面顶部居中，最多 3 条</span>
    </Row>
  );
}

mount(
  <div className="stage">
    <ToastProvider>
      <Row label="变体" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
        <Toast>筛选条件已重置</Toast>
        <Toast type="success" action="撤销">任务 TK-0930 已关闭</Toast>
        <Toast type="warning">3 个项目未同步，将在联网后重试</Toast>
        <Toast type="error" action="重试" onClose={() => undefined}>保存失败：网络连接已断开</Toast>
      </Row>
      <Demo />
    </ToastProvider>
  </div>
);
