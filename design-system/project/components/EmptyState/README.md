# EmptyState

空状态：无数据、无搜索结果、无权限。

## 何时使用

列表、表格或区块没有内容时。

## 使用方提供

`.empty` 内的图标、标题、一句说明与至多一个主要操作。

## 规则

- 说明为什么是空的、下一步做什么。
- 背景可用点阵纹理。

## 规格

- **尺寸**：图标 32，外框 64 带对角括号；标题 16 Medium；说明 14，最大宽 30 字；背景点阵纹理 8% 并自下而上渐隐
- **Token**：`--color-text-tertiary --color-text-primary --color-text-secondary --tex-points`

## 结构

```html
<div class="empty">
  <span class="empty-ic">
    <svg class="ic ic--xl"><use href="#i-box"></use></svg>
  </span>
  <h5>还没有项目</h5>
  <p>新建第一个项目后，这里会显示它的进度与成员。</p>
  <button class="btn btn--primary btn--sm" type="button">
    <span class="lbl">
      <svg class="ic ic--plus"><use href="#i-plus"></use></svg>
      新建项目
    </span>
  </button>
</div>
```

## 来源

新增。无，源站没有对应控件。
