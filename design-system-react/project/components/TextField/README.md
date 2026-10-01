# TextField

单行文本框，标签在上，说明与错误在下。

## 何时使用

输入短文本：名称、编号、数值、搜索词。

## 使用方提供

`label`、`required`、`help`；`error`（`true` 只换描边，文字时同时显示原因）；`icon` 前置图标、`clearable`、`unit` 单位、`filled`、`size`；`value` 或 `defaultValue` 与 `onChange`、`placeholder`、`disabled`、`readOnly` 等原生属性。没有 `label` 与 `help` 时只输出输入框本身，外层宽度用 `style`。

## 规则

- 错误状态边框用 `color-error`，错误文字用 `color-error-text` 并配错误图标。
- 占位文字不能代替标签。
- 同一表单的输入框取同一档高度。
- 与方形按钮同排时，输入框与按钮高度相差一档且相隔至少 24。

## 规格

- **尺寸**：高 24、32、40，全圆角胶囊；水平内边距 10、14、18；1.5px `color-border-control` 描边，悬停转为 `color-border-strong`，聚焦与错误加粗到 2px；填充型为 `color-bg-muted` 底、无描边；标签 13px 在上，说明与错误 13px 在下，间距均为 4
- **Token**：`--color-bg-page --color-border-control --color-border-strong --color-text-secondary --color-error --color-bg-disabled --radius-full`
- **键盘**：`Tab` 或 `Shift`加`Tab` 切换焦点；清除按钮可单独聚焦，`Enter` 清空

## 结构

```jsx
const { TextField } = window.Endfield;

<TextField label="名称" required placeholder="例如：季度报告" help="同一目录内不可重名" />
<TextField label="搜索" icon="i-search" clearable />
<TextField label="编号" error="应为 ID- 加 6 位数字" />
```

## 来源

新增。无，源站没有对应控件。
