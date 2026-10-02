import * as React from 'react';
import { E, mount, Stage, Row } from './_kit';
const { Select, MultiSelect } = E;

const depts = [
  { group: 'Product', options: [{ value: 'p', label: '产品部' }, { value: 'o', label: '运营部' }] },
  { group: 'Operations', options: [{ value: 'd', label: '设计部' }, { value: 'x', label: '已停用', meta: '不可选', disabled: true }] },
];
const members = [{ value: '118', label: '成员 118', meta: 'ID-000118' }, { value: '240', label: '成员 240', meta: 'ID-000240' }, { value: '302', label: '成员 302', meta: 'ID-000302' }];
const kinds = [{ value: 'r', label: '报告' }, { value: 't', label: '表格' }, { value: 'd', label: '文档' }, { value: 'i', label: '图片' }];
const full = { width: 220 };

mount(
  <Stage>
    <Row label="交互" style={{ alignItems: 'flex-start' }}>
      <Select label="所属部门" options={depts} defaultValue="p" />
    </Row>
    <Row label="静态" style={{ alignItems: 'flex-start' }}>
      <div className="item" style={{ width: 260 }}><span className="cap">展开，可搜索</span>
        <Select ariaLabel="成员" options={members} defaultValue="302" searchable defaultOpen inline /></div>
      <div className="item" style={{ width: 280 }}><span className="cap">多选，已选值为标签</span>
        <MultiSelect ariaLabel="类型" options={kinds} defaultValue={['r', 't', 'd', 'i']} style={{ width: 280 }} /></div>
      <div className="item" style={{ width: 220 }}><span className="cap">占位、错误、禁用、加载</span>
        <Select ariaLabel="类型" options={kinds} placeholder="选择类型" style={full} />
        <Select ariaLabel="类型" options={kinds} placeholder="选择类型" error style={full} />
        <Select ariaLabel="类型" options={kinds} defaultValue="d" disabled style={full} />
        <Select ariaLabel="类型" options={kinds} loading="正在加载选项" style={full} /></div>
    </Row>
  </Stage>
);
