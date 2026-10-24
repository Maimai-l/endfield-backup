import * as React from 'react';
import { E, mount, Stage, Row, Item } from './_kit';
const { Avatar, AvatarStack } = E;
const c = { justifyItems: 'center' } as React.CSSProperties;
const admin = '/_blob/1e7716566c55620aedae043991dca8e0', perlica = '/_blob/57e297b9bac7e6869f8c0eaecac43cb7', chen = '/_blob/ba5c03334ddb5f040f0baffa11378408', ember = '/_blob/9c5c8ecd9b59fe135a9131b1fd68aad4';

mount(
  <Stage>
    <Row label="尺寸">
      {[24, 32, 40, 64].map((s) => <Item key={s} cap={s} style={c}><Avatar size={s} src={admin} alt="管理员" /></Item>)}
    </Row>
    <Row label="变体">
      <Item cap="图片" style={c}><Avatar src={perlica} alt="佩丽卡" /></Item>
      <Item cap="占位" style={c}><Avatar alt="未设置头像" /></Item>
      <Item cap="在线" style={c}><Avatar src={chen} alt="陈千语" status="online" /></Item>
      <Item cap="已归档" style={c}><Avatar src={ember} alt="余烬" status="off" /></Item>
      <Item cap="可点击 hover" style={c}><Avatar className="is-hover" src={admin} label="账户：管理员" onClick={() => undefined} /></Item>
      <Item cap="堆叠" style={c}><AvatarStack more={4}><Avatar size={32} src={perlica} alt="佩丽卡" /><Avatar size={32} src={chen} alt="陈千语" /><Avatar size={32} src={ember} alt="余烬" /></AvatarStack></Item>
    </Row>
  </Stage>
);
