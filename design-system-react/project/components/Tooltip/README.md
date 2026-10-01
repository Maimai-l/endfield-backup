# Tooltip

悬浮说明，解释图标按钮或缩写的含义。

## 何时使用

图标按钮、截断的文字、需要补充说明的数值。必读信息不要放在悬浮说明里。

## 使用方提供

触发元素作为唯一的子元素（需可聚焦）；`content`；`shortcut` 快捷键；双行说明传 `title`；`placement`（top、below、start）、`multiline`；规格展示中常显传 `open`。

## 规则

- 悬停 500ms 后显示，键盘聚焦立即显示，Esc 隐藏。
- 最大宽 240，最多两行。

## 规格

- **尺寸**：最大宽 240；内边距 6、8；字号 12；距目标 6；悬停 500ms 后显示，键盘焦点立即显示，Esc 隐藏
- **Token**：`--color-bg-emphasis --color-text-on-emphasis --radius-sm --font-tech`
- **键盘**：聚焦目标时立即显示，`Esc` 隐藏

## 结构

```jsx
const { IconButton, Tooltip } = window.Endfield;

<Tooltip content="搜索项目" shortcut="Ctrl K">
  <IconButton icon="i-search" label="搜索" />
</Tooltip>
```

## 来源

新增。无，源站没有对应控件。
