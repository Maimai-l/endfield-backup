# Checkbox

复选框，含未选、已选、半选、禁用。

## 何时使用

多选，或单个开关式确认（“记住此项目”）。立即生效的设置用开关。

## 使用方提供

`<label class="check"><input type="checkbox"><span class="box">…</span>文字</label>`；半选加 `data-indet`。

## 规则

- 浅色模式为墨色填充配黄色标记，深色模式反转（`color-checked` / `color-on-checked`）。
- 一组复选框放在 `fieldset` 内并给出 `legend`。

## 规格

- **尺寸**：方框 16、20，圆角 2；可点击区域不小于 宽 24、高 24；与文字间距 8
- **Token**：`--color-border-control --color-checked --color-on-checked --color-error --radius-sm`
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
