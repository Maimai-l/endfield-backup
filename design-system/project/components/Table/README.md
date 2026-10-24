# Table

数据表格：表头下方一条 2px 正文色线，单击行选中，单击表头排序。

## 何时使用

多列可比较的数据。少于 3 列时用列表。

## 使用方提供

`.tbl-frame` 内的 `.tbl-scroll > table.tbl`；`colgroup` 给除名称列外的每一列定宽；表头每格为 `th[scope=col] > button > span.in`，数字列与进度列加 `num` 类并把箭头放在文字前，其余列箭头在文字后；当前排序列加 `aria-sort`。行：可选行带 `tabindex="0"` 与 `aria-selected`，禁用行只加 `aria-disabled="true"`。单元格类：`c-id` 编号、`c-name` 名称、`c-stat` 状态（进行中加 `is-on`，逾期等错误状态加 `is-err`）、`c-prog` 进度（结构见下）、`num` 数值（数字放在 `<b>` 内，单位跟在其后）、`c-time` 时间。需要按其他值排序时在单元格上写 `data-value`。

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

```html
<div class="tbl-frame">
  <div class="tbl-scroll">
    <table class="tbl" aria-multiselectable="true">
      <colgroup><col style="width:128px"><col><col style="width:96px"><col style="width:160px">…</colgroup>
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

新增。表头下方的粗线取自源站标题下的 2px 线，状态色条取自设计系统的左侧色条规则。
