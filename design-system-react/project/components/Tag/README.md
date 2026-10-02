# Tag

标签、状态标记与提醒角标。

## 何时使用

对象的状态、分类或数量提示。

## 使用方提供

文字 `children`；`variant`（neutral、accent）、`status`（ok、warn、err、info 带状态图标，off 不带图标）、`size`（sm、md）；可移除时传 `onRemove`。表格与列表中的状态用 `Status`（`tone`），公告的类型加日期用 `TagDate`。

## 规则

- 状态标记为状态图标加文字，不使用圆点，也不使用浅色衬底。状态图标与文字首行的墨迹垂直居中对齐；独立使用时图标 16，标签内图标 12。
- 提醒角标为 8px 橙色菱形 `color-badge`，不写数字。菱形的中心落在所属元素的右上角，不遮挡图标与文字：带边框的按钮与头像落在外框转角上；标签页落在右侧分隔线的上端；导航项落在图标右上角的外侧。

## 规格

- **尺寸**：高 20、24，水平内边距 6、8，字号 12、13，圆角 2；移除按钮 16；状态图标与文字间距 6，标签内为 4
- **Token**：`--color-bg-muted --color-accent --color-text-on-accent --color-success --color-error --color-warning --radius-sm`
- **键盘**：移除按钮可用 `Tab` 到达，`Enter` 移除

## 结构

```jsx
const { Status, Tag } = window.Endfield;

<Tag status="warn">待处理</Tag>
<Tag onRemove={remove}>表格</Tag>
<Status tone="ok">进行中</Status>
```

## 来源

源站改造。LabelTag、TagDate
