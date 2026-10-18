# Radio

单选框，同组只能选一项。

## 何时使用

从 2 至 4 个互斥选项中选一个，选项需要同时可见。

## 使用方提供

`<label class="radio"><input type="radio" name="…">…</label>`，同组共用 `name`。

## 规则

- 选中为正文色实底，中心圆点为页面底色：浅色为墨底白点，深色为浅灰底深色点。
- 默认选中最常用的一项。

## 规格

- **尺寸**：圆形 16、20；选中为正文色实底，中心 6、8 圆点为页面底色
- **Token**：`--color-border-control --color-text-primary --color-bg-page`
- **键盘**：`Tab` 进入组内已选项，`上方向键``下方向键``左方向键``右方向键` 在组内切换并选中

## 结构

```html
<fieldset class="opt-group">
  <legend>评审频率</legend>
  <label class="check radio">
    <input type="radio" name="freq">
    <span class="box"></span>
    每班一次
  </label>
  <label class="check radio">
    <input type="radio" name="freq" checked="">
    <span class="box"></span>
    每日一次
  </label>
  <label class="check radio">
    <input type="radio" name="freq">
    <span class="box"></span>
    每周一次
  </label>
  <label class="check radio">
    <input type="radio" name="freq" disabled="">
    <span class="box"></span>
    按需（需管理员权限）
  </label>
</fieldset>
```

## 来源

新增。无，源站没有对应控件。
