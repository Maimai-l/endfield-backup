# Table

数据表格：行选择、排序、标准与紧凑密度。

## 何时使用

多列可比较的数据。少于 3 列时用列表。

## 使用方提供

`table.dt`；全选框 `data-all`，行选择框 `data-row`；可排序表头 `button.sort`；密度切换 `[data-density]`。

## 规则

- 数字列右对齐，等宽数字。
- 选中行为 `color-bg-selected` 底加左侧 3px 竖条。
- 窄屏时表格区域横向滚动，不折行。

## 规格

- **尺寸**：表头 40，字号 13 Medium；数据行 48、36（紧凑）；单元格水平内边距 16、12；数字列右对齐，等宽数字；窄屏时表格区域横向滚动
- **Token**：`--color-bg-surface --color-border-subtle --color-state-hover --color-bg-selected --color-checked --color-text-secondary`
- **键盘**：`Space` 勾选行；可排序表头 `Enter` 切换升降序

## 结构

```html
<tr>
  <td class="w-check">
    <label class="check">
      <input type="checkbox" aria-label="选择 EQ-0142">
      <span class="box">
        <svg class="ic tick"><use href="#i-check"></use></svg>
      </span>
    </label>
  </td>
  <td>
    <code>EQ-0142</code>
  </td>
  <td>输送带 A-02</td>
  <td>北区装配线</td>
  <td>
    <span class="stat stat--warn">待检修</span>
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
