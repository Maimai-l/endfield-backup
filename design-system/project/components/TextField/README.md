# TextField

单行文本框，标签在上，说明与错误在下。

## 何时使用

输入短文本：名称、编号、数值、搜索词。

## 使用方提供

`label`（与输入框用 for/id 关联）、可选前缀图标、后缀单位、清除按钮、说明文字与错误文字；必填项加“必填”标签。

## 规则

- 错误状态边框用 `color-error`，错误文字用 `color-error-text` 并配错误图标。
- 占位文字不能代替标签。
- 同一表单的输入框取同一档高度。

## 规格

- **尺寸**：高 24、32、40，全圆角胶囊；水平内边距 10、14、18；1.5px `color-border-control` 描边，悬停转为 `color-border-strong`，聚焦与错误加粗到 2px；填充型为 `color-bg-muted` 底、无描边；标签 13px 在上，说明与错误 13px 在下，间距均为 4
- **Token**：`--color-bg-page --color-border-control --color-border-strong --color-text-secondary --color-error --color-bg-disabled --radius-full`
- **键盘**：`Tab` 或 `Shift`加`Tab` 切换焦点；清除按钮可单独聚焦，`Enter` 清空

## 结构

```html
<div class="field">
  <label class="field-label" for="f1">
    名称
    <span class="req">必填</span>
  </label>
  <div class="input">
    <input id="f1" placeholder="例如：季度报告">
  </div>
  <div class="field-help">同一目录内不可重名</div>
</div>
```

## 来源

新增。无，源站没有对应控件。
