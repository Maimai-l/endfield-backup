# Checkbox

复选框，含未选、已选、半选、禁用。

## 何时使用

多选，或单个开关式确认（“记住此项目”）。立即生效的设置用开关。

## 使用方提供

`<label class="check"><input type="checkbox"><span class="box">…</span>文字</label>`；半选加 `data-indet`。

## 规则

- 选中与部分选中为正文色实底配页面底色的勾：浅色为墨底白勾，深色为浅灰底深色勾（`color-text-primary` / `color-bg-page`）。
- 一组复选框放在 `fieldset` 内并给出 `legend`。

## 规格

- **尺寸**：方框 16、20，圆角 4；可点击区域不小于 宽 24、高 24；与文字间距 8
- **Token**：`--color-border-control --color-text-primary --color-bg-page --color-error --radius-md`
- **键盘**：`Space` 切换

## 结构

```html
<fieldset class="opt-group">
  <legend>通知渠道</legend>
  <label class="check">
    <input type="checkbox" checked="">
    <span class="box">
      <svg class="ic tick"><use href="#i-check"></use></svg>
    </span>
    站内消息
  </label>
  <label class="check">
    <input type="checkbox" checked="">
    <span class="box">
      <svg class="ic tick"><use href="#i-check"></use></svg>
    </span>
    邮件
  </label>
  <label class="check">
    <input type="checkbox">
    <span class="box">
      <svg class="ic tick"><use href="#i-check"></use></svg>
    </span>
    短信（每月上限 200 条）
  </label>
</fieldset>
```

## 来源

新增。无，源站没有对应控件。
