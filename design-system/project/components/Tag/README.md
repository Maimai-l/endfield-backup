# Tag

标签、胶囊标签、状态文字与提醒角标。

## 何时使用

对象的状态、分类或数量提示。胶囊标签取自游戏界面，表示效果与能力，生效为实底，未生效为描边。

## 使用方提供

`.tag` 与尺寸类；胶囊标签 `.ptag`（前置图标加文字），未生效加 `ptag--off`；状态用 `.stat` 加状态文字，错误类状态加 `.stat--err`，已归档等失效状态加 `.stat--off`；提醒角标 `.badge` 放在所属元素内，由所属元素决定位置。

## 规则

- 状态只用文字表示，不加图标、圆点与浅色衬底。错误类状态（如已逾期、失败）用 `color-error` 与 SansMedium，与表格中的状态列一致；失效状态用 `color-text-secondary`，其余为正文色。
- 提醒角标为 8px 橙色菱形 `color-badge`，不写数字。菱形的中心落在所属元素的右上角，不遮挡图标与文字：带边框的按钮与头像落在外框转角上；标签页落在右侧分隔线的上端；导航项落在图标右上角的外侧。

## 规格

- **尺寸**：高 20、24，水平内边距 6、8，字号 12、13，圆角 2；移除按钮 16；状态文字 13；胶囊标签高 24、全圆角，左内距 6、右内距 10，图标 14，与文字相隔 4，字号 14，生效为 `color-primary` 底与 `color-on-pill` 文字，未生效为 1px `color-border-control` 描边与次要文字色
- **Token**：`--color-bg-muted --color-accent --color-text-on-accent --color-success --color-error --color-warning --radius-sm --color-primary --color-on-pill --color-border-control --radius-full`
- **键盘**：移除按钮可用 `Tab` 到达，`Enter` 移除

## 结构

```html
<span class="tag">评审</span>
<span class="stat">进行中</span>
<span class="stat stat--err">已逾期</span>
<span class="badge" aria-label="有新内容"></span>
```

## 来源

源站改造。LabelTag、TagDate；胶囊标签取自游戏界面据点详情的效果标签
