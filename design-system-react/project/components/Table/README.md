# Table

数据表格：深色表头，四角折线标记，单击行选中，单击表头排序。

## 何时使用

多列可比较的数据。少于 3 列时用列表。

## 使用方提供

`columns`（`{ key, label, kind?, unit?, width?, sortable?, error?, render?, sortValue? }`，kind 为 id、name、status、time、text、number）、`rows`、`rowKey`（默认 id）；行可选时传 `selectable` 与 `selected` 或 `defaultSelected`、`onSelectedChange`；排序 `sort` 或 `defaultSort`（`{ key, dir }`）与 `onSortChange`；`isDisabled` 返回禁用行；`minWidth`（默认 880）。

## 规则

- 表头为 `color-bg-emphasis` 底；当前排序列下方为与文字等宽的 2px 品牌黄线，箭头为品牌黄，降序朝下。数字列首次单击按降序，其余列按升序，再次单击反转。
- 行左侧标记：悬停为三角，选中为 2px 短竖条，二者都不与表头和行边缘相接。悬停为 `color-bg-surface`，选中为 `color-state-hover`，按下为 `color-state-pressed`。
- 名称为正文色 14 Medium，其余文字为次要色；编号与时间用 `font-tech`；数值右对齐，数字用 `font-numeric`，单位为 12 次要色。
- 错误状态文字为 `color-error-text`，其后跟 8px `color-error` 圆点：红色文字在深色底与选中行上对比度不足，圆点保证两种主题下都能识别。
- 表头文字左缘与单元格文字左缘重合，数字列右缘重合。名称列不定宽，其余列按内容定宽，名称列至少保留 192。
- 四角标记在表格外侧 8px，外层需留出至少 8px。
- 表格最小宽 880，容器更窄时横向滚动。

## 规格

- **尺寸**：表头 32，行高 48；首列左内边距 24，其余列右内边距 16，数字列右内边距 32；四角标记 8×8、1px `color-text-secondary`；建议列宽：编号 128、部门与状态 96、进度 112、工时与时间 128
- **Token**：`--color-bg-emphasis --color-text-on-emphasis --y-300 --color-bg-surface --color-state-hover --color-state-pressed --color-checked --color-border-subtle --color-text-primary --color-text-secondary --color-text-disabled --color-error --color-error-text --color-focus-ring --font-tech --font-numeric --font-medium`
- **键盘**：`Tab` 到达表头按钮与可选行；行上 `Space` 或 `Enter` 切换选中，上下方向键移动焦点并跳过禁用行；表头按钮 `Enter` 排序
- **事件**：选中变化时调用 `onSelectedChange(keys)`，排序变化时调用 `onSortChange(sort)`

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
