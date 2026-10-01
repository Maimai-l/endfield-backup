# Table

数据表格：行选择、排序、标准与紧凑密度。

## 何时使用

多列可比较的数据。少于 3 列时用列表。

## 使用方提供

`table.dt`，外层 `.tbl-wrap`；全选框 `data-all`，行选择框 `data-row`；可排序表头 `button.sort`；密度切换 `[data-density]`；次要列加 `c-opt`（容器窄于 720 时隐藏），再次要的列加 `c-opt2`（窄于 560 时隐藏）；进度单元格 `.meter`，内含轨道 `i` 与数值 `b`。

## 规则

- 数字列右对齐，等宽数字；编号与时间用 `font-tech`。
- 悬停行为 `color-bg-surface` 底；选中行为 `color-state-hover` 底加左侧 3px `color-checked` 竖条，比悬停更深一档。
- 进度单元格的轨道宽 64，数值固定宽 36 并右对齐，各行轨道左端对齐；轨道为 `color-border-subtle`，在选中行上仍可辨认；填充一律为 `color-checked`，不按数值改变颜色。
- 状态点：进行中 `color-success`，待处理 `color-info`，已暂停 `color-warning`，已归档为空心；红色只用于失败与错误。
- 窄屏时先按优先级隐藏次要列，编号、名称、状态与主要数值列始终保留；隐藏后仍放不下时表格区域横向滚动，不折行。
- 工具栏左侧为胶囊搜索与筛选，右侧控件放在 `.tb-end` 内，换行时整组靠右。

## 规格

- **尺寸**：表头 40，字号 13；数据行 48、36（紧凑）；单元格水平内边距 16、12；状态点 8；进度轨道 64×4
- **Token**：`--color-bg-surface --color-border-subtle --color-state-hover --color-checked --color-text-secondary --font-tech`
- **键盘**：`Space` 勾选行；可排序表头 `Enter` 切换升降序

## 结构

```html
<tr>
  <td class="w-check">
    <label class="check">
      <input type="checkbox" aria-label="选择 PRJ-0142">
      <span class="box">
        <svg class="ic tick"><use href="#i-check"></use></svg>
      </span>
    </label>
  </td>
  <td>
    <code>PRJ-0142</code>
  </td>
  <td>官网改版</td>
  <td>产品部</td>
  <td>
    <span class="stat stat--warn">待处理</span>
  </td>
  <td class="num">
    <span class="meter hi">
      <i style="--v:91%"></i>
      91%
    </span>
  </td>
  <td class="num">412 h</td>
  <td>
    <code>09-30 14:20</code>
  </td>
</tr>
```

## 来源

新增。无，源站没有对应控件。
