# Table

数据表格：深色表头，四角折线标记，单击行选中，单击表头排序。

## 何时使用

多列可比较的数据。少于 3 列时用列表。

## 使用方提供

`columns`（`{ key, label, kind?, unit?, width?, sortable?, error?, render?, sortValue? }`，kind 为 id、name、status、time、text、number）、`rows`、`rowKey`（默认 id）；行可选时传 `selectable` 与 `selected` 或 `defaultSelected`、`onSelectedChange`，表头左侧自动出现全选方块，并支持 `Shift` 连续选中、`Ctrl/Cmd+A` 全选、`Esc` 清除；排序 `sort` 或 `defaultSort`（`{ key, dir }`）与 `onSortChange`；`isDisabled` 返回禁用行；`minWidth`（默认 880）。

## 规则

- 表头为 `color-bg-emphasis` 底；当前排序列下方为与文字等宽的 2px 品牌黄线，箭头为品牌黄，降序朝下。数字列首次单击按降序，其余列按升序，再次单击反转。
- 行左侧标记：悬停为三角，选中为 2px 短竖条，二者都不与表头和行边缘相接。悬停为 `color-bg-surface`，选中为 `color-state-hover`，按下为 `color-state-pressed`。
- 全选不加勾选列：可选表格的表头左侧留白中有一个 6×6 方块，左缘与行标记对齐。未全部选中时为 1px 描边，单击全选；全部选中时为实心品牌黄，单击清除。没有部分选中状态。禁用行不参与全选。
- 名称为正文色 14 Medium，其余文字为次要色；编号与时间用 `font-tech`；数值右对齐，数字用 `font-numeric`，单位为 12 次要色。
- 错误状态只用文字表示，不加任何图标或符号：两种主题下都为 `color-error` 红色 Medium。深色下红字与页面底的对比度为 3.87:1、与选中行为 2.83:1，低于正文 4.5:1，需要靠颜色与字重识别。
- 表头文字左缘与单元格文字左缘重合，数字列右缘重合。名称列不定宽，其余列按内容定宽，名称列至少保留 192。
- 四角标记在表格外侧 8px，外层需留出至少 8px。
- 表格最小宽 880，容器更窄时横向滚动。

## 规格

- **尺寸**：表头 32，行高 48；首列左内边距 24，其余列右内边距 16，数字列右内边距 32；四角标记 8×8、1px `color-text-secondary`；建议列宽：编号 128、部门与状态 96、进度 112、工时与时间 128
- **Token**：`--color-bg-emphasis --color-text-on-emphasis --y-300 --color-bg-surface --color-state-hover --color-state-pressed --color-checked --color-border-subtle --color-text-primary --color-text-secondary --color-text-disabled --color-error --color-focus-ring --font-tech --font-numeric --font-medium`
- **键盘**：`Tab` 到达全选方块、表头按钮与可选行；行上 `Space` 或 `Enter` 切换选中，`Shift` 加单击连续选中一段，`Ctrl+A`（Mac 为 `Cmd+A`）全选，`Esc` 清除；上下方向键移动焦点并跳过禁用行；表头按钮 `Enter` 排序
- **脚本**：`Endfield.init` 绑定排序、选中与键盘操作，并在可选表格的表头生成全选方块 `.tbl-all`；选中变化时表格派发 `tbl-select` 事件；`table.Endfield.selected()` 返回已选行，`selectAll()`、`clear()` 全选与清除，动态插入的行先调用 `table.Endfield.prep(tr)`

## 结构

```jsx
const { Table } = window.Endfield;

<Table rows={rows} selectable defaultSort={{ key: 'prog', dir: 'descending' }} isDisabled={(r) => r.archived}
  columns={[
    { key: 'id', label: '项目编号', kind: 'id', width: 128 },
    { key: 'name', label: '名称', kind: 'name' },
    { key: 'prog', label: '进度', kind: 'number', unit: '%', width: 112 },
  ]} />
```

## 来源

新增，按设计稿实现。
