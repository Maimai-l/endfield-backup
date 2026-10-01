# Divider

分隔线：横线、带标题分隔与竖线。

## 何时使用

区分同一区块内的分组。区块之间用间距，不用分隔线。

## 使用方提供

`.hr`、`.hr-sec`（带文字）、`.vsep`。

## 规则

- 颜色用 `color-border-subtle`。

## 规格

- **尺寸**：1px；内容内上下间距 16，区块之间 24；区块分隔带 6px 方点与渐隐线
- **Token**：`--color-border-subtle --color-border-strong --color-text-tertiary`

## 结构

```html
<div class="hr-sec" role="separator">Maintenance log</div>
```

## 来源

源站改造。DividerBand（装饰带仅用于营销页）
