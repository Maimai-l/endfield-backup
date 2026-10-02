# Checkbox

复选框，含未选、已选、半选、禁用。

## 何时使用

多选，或单个开关式确认（“记住此项目”）。立即生效的设置用开关。

## 使用方提供

文字 `children`；`checked` 或 `defaultChecked` 与 `onChange`；`indeterminate` 部分选中；`error`、`disabled`、`size`（md、lg）。成组时放在 `OptionGroup`（`legend`）内。

## 规则

- 浅色模式为墨色填充配黄色标记，深色模式反转（`color-checked` / `color-on-checked`）。
- 一组复选框放在 `fieldset` 内并给出 `legend`。

## 规格

- **尺寸**：方框 16、20，圆角 2；可点击区域不小于 宽 24、高 24；与文字间距 8
- **Token**：`--color-border-control --color-checked --color-on-checked --color-error --radius-sm`
- **键盘**：`Space` 切换

## 结构

```jsx
const { Checkbox, OptionGroup } = window.Endfield;

<OptionGroup legend="通知渠道">
  <Checkbox defaultChecked>站内消息</Checkbox>
  <Checkbox>短信</Checkbox>
</OptionGroup>
```

## 来源

新增。无，源站没有对应控件。
