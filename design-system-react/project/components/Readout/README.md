# Readout

读数：多行的标签与数值，用于状态卡、详情面板等需要并列多项小读数的位置。

## 何时使用

一个对象的多项属性，例如端口、版本、时间、计数。单个需要突出的指标用 Card 的读数卡片。

## 使用方提供

`items`（`{ label, value, kind? }`，kind 为 num 纯数字、code 字母与数字混排，省略为中文）、`style`。

## 规则

- 同类对象用同一组标签、同一顺序。
- 数值按字体分工排：纯数字用 `font-numeric`，字母与数字混排用 `font-en`，中文用 Sans。
- 没有数值时写“无”，不留空，不用符号代替。
- 不写说明句。

## 规格

- **尺寸**：每行高 20，行距 8；标签 12px `color-text-secondary`，左对齐；数值 14px `color-text-primary`，右对齐，超出时截断；`code` 为 12px；标签与数值按行的中线对齐
- **Token**：`--color-text-secondary --color-text-primary --font-body --font-numeric --font-en`

## 结构

```jsx
const { Readout } = window.Endfield;

<Readout items={[
  { label: '地址', value: 'mcp.local', kind: 'code' },
  { label: '端口', value: '8400', kind: 'num' },
  { label: '所属分组', value: '渲染节点' },
]} />
```

## 来源

新增。
