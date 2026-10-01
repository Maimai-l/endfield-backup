import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { PageLoader, Button } = E;

function Demo() {
  const [k, setK] = React.useState(0);
  return (
    <Stage>
      <Row label="纵向" style={{ width: '100%' }}><PageLoader label="正在载入工作区" replayKey={k} /></Row>
      <Row label="横向">
        <PageLoader orientation="horizontal" label="正在载入工作区" replayKey={k} />
        <div className="item" style={{ alignSelf: 'flex-end' }}><Button size="sm" icon="i-refresh" onClick={() => setK(k + 1)}>重新播放</Button></div>
      </Row>
    </Stage>
  );
}
mount(<Demo />);
