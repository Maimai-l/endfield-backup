# Tag

标签、状态文字与提醒角标。

## 何时使用

对象的状态、分类或数量提示。

## 使用方提供

文字 `children`；`variant`（neutral、accent）、`size`（sm、md）；可移除时传 `onRemove`。表格与列表中的状态用 `Status`（`tone`：省略为正文色，err 为错误文字色，off 为次要文字色），公告的类型加日期用 `TagDate`。

## 规则

- 状态只用文字表示，不加图标、圆点与浅色衬底。错误类状态（如已逾期、失败）用 `color-error` 与 SansMedium，与表格中的状态列一致；失效状态用 `color-text-secondary`，其余为正文色。
- 提醒角标为 8px 橙色菱形 `color-badge`，不写数字。菱形的中心落在所属元素的右上角，不遮挡图标与文字：带边框的按钮与头像落在外框转角上；标签页落在右侧分隔线的上端；导航项落在图标右上角的外侧。

## 规格

- **尺寸**：高 20、24，水平内边距 6、8，字号 12、13，圆角 2；移除按钮 16；状态文字 13
- **Token**：`--color-bg-muted --color-accent --color-text-on-accent --color-success --color-error --color-warning --radius-sm`
- **键盘**：移除按钮可用 `Tab` 到达，`Enter` 移除

## 结构

```jsx
const { Status, Tag } = window.Endfield;

<Tag>评审</Tag>
<Tag onRemove={remove}>表格</Tag>
<Status>进行中</Status>
<Status tone="err">已逾期</Status>
```

## 来源

源站改造。LabelTag、TagDate
