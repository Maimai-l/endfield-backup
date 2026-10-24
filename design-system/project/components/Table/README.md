# Table

数据表格：浅灰表头条，行首复选框，单击行选中，单击表头排序。

## 何时使用

多列可比较的数据。少于 3 列时用列表。

## 使用方提供

`.tbl-frame` 内的 `.tbl-scroll > table.tbl`；`colgroup` 给除名称列外的每一列定宽；表头每格为 `th[scope=col] > button > span.in`，数字列与进度列加 `num` 类并把箭头放在文字前，其余列箭头在文字后；当前排序列加 `aria-sort`。行：可选行带 `tabindex="0"` 与 `aria-selected`，禁用行只加 `aria-disabled="true"`。单元格类：`c-id` 编号、`c-name` 名称、`c-stat` 状态（进行中加 `is-on`，逾期等错误状态加 `is-err`）、`c-prog` 进度（结构见下）、`num` 数值（数字放在 `<b>` 内，单位跟在其后）、`c-time` 时间。需要按其他值排序时在单元格上写 `data-value`。

## 规则

- 表头为 `color-state-hover` 底色条，12 号次要色文字，不加分隔线。当前排序列的文字与箭头为正文色，降序朝下；其余列悬停时显示半透明箭头。数字列首次单击按降序，其余列按升序，再次单击反转。
- 行：底色为 `color-bg-page`，行间一条 1px `color-border-subtle` 分隔线；悬停为 `color-bg-surface`，按下为 `color-state-pressed`，选中为 `color-bg-selected`。
- 可选表格在首列左侧显示复选框，外观同 Checkbox：16×16、1px `color-border-control` 描边、`radius-md` 圆角，选中时填充正文色并显示对钩。复选框随行的选中状态变化，单击行任意位置都可切换。表头的复选框为全选：全部选中时为勾选，单击清除；没有部分选中状态。禁用行的复选框为禁用样式，不参与全选。
- 状态只用文字：进行中为正文色，其余为次要色，错误状态为 `color-error` Medium。不加图标与色条。
- 进度列为 4px 进度条加百分比：轨道 `color-bg-muted`，填充 `color-text-secondary`；百分比右对齐，宽度至少 40。
- 名称为正文色 14 Medium，其余文字为次要色；编号用 `font-en`；数值与时间用 `font-numeric`，单位为 12 次要色，紧跟数字，间隔 2px。
- 表头文字左缘与单元格文字左缘重合，数字列与进度列右缘重合。名称列不定宽，其余列按内容定宽，名称列至少保留 192。
- 表格最小宽 912，可选表格 944；容器更窄时横向滚动。

## 规格

- **尺寸**：表头 32，行高 48；首列左内边距 24，可选表格为 56（复选框位于 24 至 40），其余列右内边距 16，数字列与进度列右内边距 24；进度条高 4、圆角 2，与百分比间隔 16；建议列宽：编号 128（可选表格 160）、部门与状态 96、进度 160、工时 112、时间 128
- **Token**：`--color-bg-page --color-bg-surface --color-text-primary --color-text-secondary --color-text-disabled --color-state-hover --color-state-pressed --color-bg-selected --color-bg-muted --color-bg-disabled --color-border-subtle --color-border-control --color-border-strong --color-error --color-focus-ring --radius-md --font-en --font-numeric --font-medium`
- **键盘**：`Tab` 到达全选复选框、表头按钮与可选行；行上 `Space` 或 `Enter` 切换选中，`Shift` 加单击连续选中一段，`Ctrl+A`（Mac 为 `Cmd+A`）全选，`Esc` 清除；上下方向键移动焦点并跳过禁用行；表头按钮 `Enter` 排序
- **脚本**：`Endfield.init` 绑定排序、选中与键盘操作，并在可选表格的表头生成全选复选框 `.tbl-all`；选中变化时表格派发 `tbl-select` 事件；`table.Endfield.selected()` 返回已选行，`selectAll()`、`clear()` 全选与清除，动态插入的行先调用 `table.Endfield.prep(tr)`

## 结构

```html
<div class="tbl-frame">
  <div class="tbl-scroll">
    <table class="tbl" aria-multiselectable="true">
      <colgroup><col style="width:160px"><col><col style="width:96px"><col style="width:160px">…</colgroup>
      <thead><tr>
        <th scope="col"><button type="button"><span class="in"><span>名称</span><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4 H10 L6 10 Z" fill="currentColor"/></svg></span></button></th>
        <th scope="col" class="num" aria-sort="descending"><button type="button"><span class="in"><svg …></svg><span>进度</span></span></button></th>
      </tr></thead>
      <tbody>
        <tr tabindex="0" aria-selected="false">
          <td class="c-id">PRJ-0142</td><td class="c-name">官网改版</td>
          <td class="c-stat is-on">进行中</td>
          <td class="c-prog"><span class="pv"><span class="bar"><i style="--v:91%"></i></span><span class="n"><b>91</b>%</span></span></td>
          <td class="num"><b>412</b>h</td>
        </tr>
        <tr aria-disabled="true">…</tr>
      </tbody>
    </table>
  </div>
</div>
```

## 来源

新增。表头条取自源站的灰色标签条，复选框同设计系统的 Checkbox。
