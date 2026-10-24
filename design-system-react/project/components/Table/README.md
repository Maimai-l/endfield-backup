# Table

数据表格：表头下方一条 2px 正文色线，单击行选中，单击表头排序。

## 何时使用

多列可比较的数据。少于 3 列时用列表。

## 使用方提供

`columns`（`{ key, label, kind?, unit?, width?, sortable?, error?, active?, render?, sortValue? }`，kind 为 id、name、status、time、text、number、progress；状态列用 `error` 与 `active` 标出逾期与进行中）、`rows`、`rowKey`（默认 id）；行可选时传 `selectable` 与 `selected` 或 `defaultSelected`、`onSelectedChange`，表头左侧自动出现全选方块，并支持 `Shift` 连续选中、`Ctrl/Cmd+A` 全选、`Esc` 清除；排序 `sort` 或 `defaultSort`（`{ key, dir }`）与 `onSortChange`；`isDisabled` 返回禁用行；`minWidth`（默认 912）。

## 规则

- 表头不加底色：12 号次要色文字，下方一条 2px `color-text-primary` 线。当前排序列的文字与箭头为正文色，降序朝下；其余列悬停时显示半透明箭头。数字列首次单击按降序，其余列按升序，再次单击反转。
- 行：悬停为 `color-state-hover`，按下为 `color-state-pressed`；选中为 `color-bg-selected`，左缘一条 4px `color-checked` 竖条，上下各留 8px。品牌黄只出现在这条竖条上。
- 全选不加勾选列：可选表格的表头左侧留白中有一个 8×8 方块。未全部选中时为 1px 描边，单击全选；全部选中时为实心 `color-checked`，单击清除。没有部分选中状态。禁用行不参与全选。
- 状态只用文字与左侧色条：文字前一条 2×12 色条，进行中为正文色，其余为 `color-border-control` 灰色，错误状态的文字与色条都为 `color-error`，文字用 Medium。不加图标。
- 进度列为 4px 进度条加百分比：轨道 `color-bg-muted`，填充正文色；百分比右对齐，宽度至少 40。
- 名称为正文色 14 Medium，其余文字为次要色；编号用 `font-en`；数值与时间用 `font-numeric`，单位为 12 次要色，紧跟数字，间隔 2px。
- 表头文字左缘与单元格文字左缘重合，数字列与进度列右缘重合。名称列不定宽，其余列按内容定宽，名称列至少保留 192。
- 表格最小宽 912，容器更窄时横向滚动。

## 规格

- **尺寸**：表头 40（含 2px 线），行高 48；首列左内边距 24，其余列右内边距 16，数字列与进度列右内边距 24；进度条高 4、圆角 2，与百分比间隔 16；建议列宽：编号 128、部门与状态 96、进度 160、工时 112、时间 128
- **Token**：`--color-text-primary --color-text-secondary --color-text-disabled --color-state-hover --color-state-pressed --color-bg-selected --color-bg-muted --color-checked --color-border-subtle --color-border-control --color-error --color-focus-ring --font-en --font-numeric --font-medium`
- **键盘**：`Tab` 到达全选方块、表头按钮与可选行；行上 `Space` 或 `Enter` 切换选中，`Shift` 加单击连续选中一段，`Ctrl+A`（Mac 为 `Cmd+A`）全选，`Esc` 清除；上下方向键移动焦点并跳过禁用行；表头按钮 `Enter` 排序
- **脚本**：`Endfield.init` 绑定排序、选中与键盘操作，并在可选表格的表头生成全选方块 `.tbl-all`；选中变化时表格派发 `tbl-select` 事件；`table.Endfield.selected()` 返回已选行，`selectAll()`、`clear()` 全选与清除，动态插入的行先调用 `table.Endfield.prep(tr)`

## 结构

```jsx
const { Table } = window.Endfield;

<Table rows={rows} selectable defaultSort={{ key: 'prog', dir: 'descending' }} isDisabled={(r) => r.archived}
  columns={[
    { key: 'id', label: '项目编号', kind: 'id', width: 128 },
    { key: 'name', label: '名称', kind: 'name' },
    { key: 'prog', label: '进度', kind: 'progress', width: 160 },
  ]} />
```

## 来源

新增。表头下方的粗线取自源站标题下的 2px 线，状态色条取自设计系统的左侧色条规则。
