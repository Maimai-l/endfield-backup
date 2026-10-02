import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { Breadcrumb, Path } = E;
const h = '#c-crumbs';

mount(
  <Stage prov>
    <Row label="标准"><Breadcrumb items={[{ label: '项目管理', href: h }, { label: '产品部', href: h }, { label: '官网', href: h }, { label: '官网改版' }]} /></Row>
    <Row label="路径"><Path items={['项目管理', '产品部', '官网改版']} /><span className="cap" style={{ alignSelf: 'center' }}>页面左上角的当前位置，前缀为两道斜线</span></Row>
    <Row label="折叠"><Breadcrumb items={[{ label: '项目管理', href: h }, { label: '产品部', href: h }, { label: '官网', href: h }, { label: '设计', href: h }, { label: '前端', href: h }, { label: '组件库' }]} /><span className="cap" style={{ alignSelf: 'center' }}>超过 4 级时折叠中间层级</span></Row>
  </Stage>
);
