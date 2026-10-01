import * as React from 'react';
import { E, mount, Stage, Row, Item } from './_kit';
const { IconButton, CloseButton, RoundButton } = E;

mount(
  <Stage>
    <Row label="方形">
      <Item cap="primary"><IconButton variant="primary" icon="i-upload" label="上传" tooltip /></Item>
      <Item cap="accent"><IconButton variant="accent" icon="i-plus" label="新建" tooltip /></Item>
      <Item cap="secondary"><IconButton icon="i-filter" label="筛选" tooltip /></Item>
      <Item cap="ghost"><IconButton variant="ghost" icon="i-more" label="更多操作" tooltip /></Item>
      <Item cap="danger"><IconButton variant="danger" icon="i-trash" label="删除" tooltip /></Item>
      <Item cap="toggle 已按下"><IconButton icon="i-grid" label="网格视图" defaultPressed /></Item>
    </Row>
    <Row label="尺寸">
      <Item cap="24"><IconButton size="sm" icon="i-copy" label="复制" /></Item>
      <Item cap="32"><IconButton icon="i-copy" label="复制" /></Item>
      <Item cap="40"><IconButton size="lg" icon="i-copy" label="复制" /></Item>
      <Item cap="disabled"><IconButton icon="i-copy" label="复制" disabled /></Item>
    </Row>
    <Row label="关闭">
      <Item cap="default"><CloseButton /></Item>
      <Item cap="hover"><CloseButton className="is-hover" /></Item>
      <Item cap="返回"><CloseButton kind="back" /></Item>
      <Item cap="深色面"><span style={{ display: 'inline-grid', placeItems: 'center', background: 'var(--strip)', padding: 8, borderRadius: 2 }}><CloseButton inverse /></span></Item>
      <Item cap="提醒角标"><IconButton icon="i-list" label="通知，有 3 条未读" badge /></Item>
    </Row>
    <Row label="圆形">
      <Item cap="default"><RoundButton direction="prev" /></Item>
      <Item cap="hover"><RoundButton direction="next" className="is-hover" /></Item>
      <Item cap="44"><RoundButton direction="next" size="lg" /></Item>
      <Item cap="disabled"><RoundButton direction="prev" disabled /></Item>
      <Item><span className="cap" style={{ maxWidth: '26ch' }}>圆形保留源站样式，仅用于轮播与图集翻页</span></Item>
    </Row>
  </Stage>
);
