# Tooltip

悬浮说明，解释图标按钮或缩写的含义。

## 何时使用

图标按钮、截断的文字、需要补充说明的数值。必读信息不要放在悬浮说明里。

## 使用方提供

`.tip-host` 包住目标与 `.tip`（`role=tooltip`），目标用 `aria-describedby` 关联。

## 规则

- 悬停 500ms 后显示，键盘聚焦立即显示，Esc 隐藏。
- 最大宽 240，最多两行。

## 规格

- **尺寸**：最大宽 240；内边距 6、8；字号 12；距目标 6；悬停 500ms 后显示，键盘焦点立即显示，Esc 隐藏
- **Token**：`--color-bg-emphasis --color-text-on-emphasis --radius-sm --font-tech`
- **键盘**：聚焦目标时立即显示，`Esc` 隐藏

## 结构

```html
<span class="tip-host">
  <button class="btn btn--secondary ibtn" type="button" aria-label="刷新" aria-describedby="t1">
    <svg class="ic ic--refresh"><use href="#i-refresh"></use></svg>
  </button>
  <span class="tip" id="t1" role="tooltip">刷新数据</span>
</span>
```

## 来源

新增。无，源站没有对应控件。
