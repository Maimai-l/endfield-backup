# TextArea

多行文本框，右下角显示字数。

## 何时使用

输入多行说明：描述、备注。

## 使用方提供

`label`、`help`、`error`；`maxLength` 时右下角显示计数；`value` 或 `defaultValue` 与 `onChange`、`placeholder`；外层宽度用 `style`。

## 规则

- 最少显示 3 行，超出 10 行后滚动。
- 字数上限写在 `maxLength`。

## 规格

- **尺寸**：最小高 80；圆角 16（`radius-lg`）；内边距 10、16；描边与文本框相同；字号 14，行高 1.6；右下角字数计数 12px Space Grotesk
- **Token**：`同单行文本框`
- **键盘**：`Tab` 离开输入区，不插入制表符

## 结构

```jsx
const { TextArea } = window.Endfield;

<TextArea label="描述" maxLength={200} placeholder="补充背景与目标" style={{ width: 340 }} />
```

## 来源

新增。无，源站没有对应控件。
