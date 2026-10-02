# Table

数据表格：深色表头，四角折线标记，单击行选中，单击表头排序。

## 何时使用

多列可比较的数据。少于 3 列时用列表。

## 使用方提供

`.tbl-frame`（首个子元素为四个空 `<i>`，即四角标记）内的 `.tbl-scroll > table.tbl`；`colgroup` 给除名称列外的每一列定宽；表头每格为 `th[scope=col] > button > span.in`，数字列加 `num` 类并把箭头放在文字前，其余列箭头在文字后；当前排序列加 `aria-sort`。行：可选行带 `tabindex="0"` 与 `aria-selected`，禁用行只加 `aria-disabled="true"`。单元格类：`c-id` 编号、`c-name` 名称、`c-stat` 状态（逾期等错误状态加 `is-err`，并在文字前放 `s-error` 图标）、`num` 数值（数字放在 `<b>` 内，单位跟在其后）、`c-time` 时间。需要按其他值排序时在单元格上写 `data-value`。

## 规则

- 表头为 `color-bg-emphasis` 底；当前排序列下方为与文字等宽的 2px 品牌黄线，箭头为品牌黄，降序朝下。数字列首次单击按降序，其余列按升序，再次单击反转。
- 行左侧标记：悬停为三角，选中为 2px 短竖条，二者都不与表头和行边缘相接。悬停为 `color-bg-surface`，选中为 `color-state-hover`，按下为 `color-state-pressed`。
- 名称为正文色 14 Medium，其余文字为次要色；编号与时间用 `font-tech`；数值右对齐，数字用 `font-numeric`，单位为 12 次要色。
- 错误状态文字为 `color-error-text`，文字前放 16px `s-error` 图标：红色文字在深色底与选中行上对比度不足，图标保证两种主题下都能识别。
- 表头文字左缘与单元格文字左缘重合，数字列右缘重合。名称列不定宽，其余列按内容定宽，名称列至少保留 192。
- 四角标记在表格外侧 8px，外层需留出至少 8px。
- 表格最小宽 880，容器更窄时横向滚动。

## 规格

- **尺寸**：表头 32，行高 48；首列左内边距 24，其余列右内边距 16，数字列右内边距 32；四角标记 8×8、1px `color-text-secondary`；建议列宽：编号 128、部门与状态 96、进度 112、工时与时间 128
- **Token**：`--color-bg-emphasis --color-text-on-emphasis --y-300 --color-bg-surface --color-state-hover --color-state-pressed --color-checked --color-border-subtle --color-text-primary --color-text-secondary --color-text-disabled --color-error --color-error-text --color-focus-ring --font-tech --font-numeric --font-medium`
- **键盘**：`Tab` 到达表头按钮与可选行；行上 `Space` 或 `Enter` 切换选中，上下方向键移动焦点并跳过禁用行；表头按钮 `Enter` 排序
- **脚本**：`Endfield.init` 绑定排序、选中与键盘操作；选中变化时表格派发 `tbl-select` 事件；`table.Endfield.selected()` 返回已选行，动态插入的行先调用 `table.Endfield.prep(tr)`

## 结构

```html
<div class="tbl-frame">
  <i></i><i></i><i></i><i></i>
  <div class="tbl-scroll">
    <table class="tbl" aria-multiselectable="true">
      <colgroup><col style="width:128px"><col><col style="width:96px">…</colgroup>
      <thead><tr>
        <th scope="col"><button type="button"><span class="in"><span>名称</span><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4 H10 L6 10 Z" fill="currentColor"/></svg></span></button></th>
        <th scope="col" class="num" aria-sort="descending"><button type="button"><span class="in"><svg …></svg><span>进度</span></span></button></th>
      </tr></thead>
      <tbody>
        <tr tabindex="0" aria-selected="false">
          <td class="c-id">PRJ-0142</td><td class="c-name">官网改版</td>
          <td class="c-stat">进行中</td><td class="num"><b>91</b>%</td>
        </tr>
        <tr aria-disabled="true">…</tr>
      </tbody>
    </table>
  </div>
</div>
```

## 来源

新增，按设计稿实现。
