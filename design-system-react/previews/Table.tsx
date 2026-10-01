import * as React from 'react';
import { E, mount, Prov } from './_kit';
const { Table } = E;

const STAT = ['进行中', '待处理', '已暂停', '已逾期', '已归档'];
const rows = ([
  ['PRJ-0142', '官网改版', '产品部', 0, 91, 412, '09-30 14:20'], ['PRJ-0207', '移动端应用', '运营部', 0, 68, 1206, '09-30 14:18'],
  ['PRJ-0311', '数据看板', '产品部', 1, 0, 88, '09-30 14:15'], ['PRJ-0418', '支付接入', '设计部', 2, 54, 2940, '09-30 13:52'],
  ['PRJ-0466', '权限重构', '平台部', 3, 37, 640, '09-29 18:04'], ['PRJ-0502', '旧版官网', '产品部', 4, 100, 5118, '09-12 08:00'],
  ['PRJ-0533', '消息中心', '平台部', 0, 22, 176, '09-29 11:40'], ['PRJ-0571', '报表导出', '运营部', 1, 0, 0, '09-28 16:02'],
  ['PRJ-0604', '搜索优化', '产品部', 0, 79, 934, '09-28 09:30'], ['PRJ-0648', '设计规范', '设计部', 2, 45, 1512, '09-27 17:26'],
] as const).map(([id, name, dept, s, prog, hours, time]) => ({ id, name, dept, stat: STAT[s], s, prog, hours, time }));
type Row = (typeof rows)[number];

mount(
  <><Prov /><div className="stage">
    <Table<Row> ariaLabel="项目" rows={rows} selectable defaultSelected={['PRJ-0207']} defaultSort={{ key: 'prog', dir: 'descending' }}
      isDisabled={(r) => r.s === 4}
      columns={[
        { key: 'id', label: '项目编号', kind: 'id', width: 128 },
        { key: 'name', label: '名称', kind: 'name' },
        { key: 'dept', label: '部门', width: 96 },
        { key: 'stat', label: '状态', kind: 'status', width: 96, error: (r) => r.s === 3, sortValue: (r) => r.s },
        { key: 'prog', label: '进度', kind: 'number', unit: '%', width: 112 },
        { key: 'hours', label: '工时', kind: 'number', unit: 'h', width: 128 },
        { key: 'time', label: '更新时间', kind: 'time', width: 128 },
      ]} />
  </div></>
);
