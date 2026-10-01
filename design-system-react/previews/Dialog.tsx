import * as React from 'react';
import { E, mount, Row } from './_kit';
const { Dialog, Button, TextField } = E;

function Demo() {
  const [a, setA] = React.useState(false);
  const [b, setB] = React.useState(false);
  return (
    <>
      <Row label="演示">
        <Button size="sm" onClick={() => setA(true)}>打开确认对话框</Button>
        <Button size="sm" onClick={() => setB(true)}>打开危险确认</Button>
        <span className="cap">Esc 关闭，焦点锁定在对话框内</span>
      </Row>
      <Dialog open={a} onClose={() => setA(false)} title="提交任务" confirmLabel="提交">
        <p>提交后任务将进入审核，审核期间不可修改内容。</p>
        <TextField label="审核人" defaultValue="成员 302" style={{ width: '100%' }} />
      </Dialog>
      <Dialog open={b} onClose={() => setB(false)} danger title="删除项目" confirmText="PRJ-0142">
        <p>删除后该项目的 1,284 条记录将一并清除，且无法恢复。输入 <span className="confirm-code">PRJ-0142</span> 以确认。</p>
      </Dialog>
    </>
  );
}

mount(
  <div className="stage">
    <div className="scrim-stage">
      <Dialog inline title="提交任务" confirmLabel="提交">
        <p>提交后任务将进入审核，审核期间不可修改内容。</p>
        <TextField label="审核人" defaultValue="成员 302" style={{ width: '100%' }} />
      </Dialog>
      <Dialog inline danger title="删除项目" confirmText="PRJ-0142">
        <p>删除后该项目的 1,284 条记录将一并清除，且无法恢复。输入 <span className="confirm-code">PRJ-0142</span> 以确认。</p>
      </Dialog>
    </div>
    <Demo />
  </div>
);
