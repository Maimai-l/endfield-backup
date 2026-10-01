# List

列表与侧边菜单。

## 何时使用

同类条目的纵向列表；侧边菜单用于二级导航。

## 使用方提供

`[data-list]` 的 `.list` 与 `.li` 行（单行、双行、紧凑）；侧边菜单 `[data-smenu]` 与 `.smi`。

## 规则

- 选中为纯黄色块，文字与图标转为墨色。
- 方向键在行之间移动。

## 规格

- **尺寸**：行高 32（紧凑）、40（单行）、56（双行）；水平内边距 16；前置图标框 宽 32、高 32；选中为纯黄色块，文字与图标转为墨色；侧边菜单的选中项另加 SELECTED 标签
- **Token**：`--color-state-hover --color-state-pressed --color-bg-selected --color-checked --color-border-subtle --color-text-secondary`
- **键盘**：`上方向键``下方向键` 在行之间移动，`Enter` 或 `Space` 选中

## 结构

```html
<li class="li li--2" role="option" aria-selected="false" tabindex="0">
  <span class="lead">
    <svg class="ic"><use href="#i-box"></use></svg>
  </span>
  <span class="main">
    <b>输送带 A-02</b>
    <span>北区装配线</span>
  </span>
  <span class="trail">
    <span class="stat stat--warn">待检修</span>
    <svg class="ic"><use href="#i-chev-r"></use></svg>
  </span>
</li>
```

## 来源

新增。无，源站没有对应控件。
