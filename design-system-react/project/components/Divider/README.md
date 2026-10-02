# Divider

分隔线：横线、带标题分隔与竖线。

## 何时使用

区分同一区块内的分组。区块之间用间距，不用分隔线。

## 使用方提供

`variant`（line、label、section、vertical）；label 与 section 传文字 `children`。

## 规则

- 颜色用 `color-border-subtle`。

## 规格

- **尺寸**：1px；内容内上下间距 16，区块之间 24；区块分隔带 6px 方点与渐隐线
- **Token**：`--color-border-subtle --color-border-strong --color-text-tertiary`

## 结构

```jsx
const { Divider } = window.Endfield;

<Divider />
<Divider variant="label">以下为已归档记录</Divider>
```

## 来源

源站改造。DividerBand（装饰带仅用于营销页）
