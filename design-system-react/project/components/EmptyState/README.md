# EmptyState

空状态：无数据、无搜索结果、无权限。

## 何时使用

列表、表格或区块没有内容时。

## 使用方提供

`icon`、`title`、说明 `children`（原因与下一步）、唯一的操作 `action`。

## 规则

- 说明为什么是空的、下一步做什么。
- 背景可用点阵纹理。

## 规格

- **尺寸**：图标 32，外框 64 带对角括号；标题 16 Medium；说明 14，最大宽 30 字；背景点阵纹理 8% 并自下而上渐隐
- **Token**：`--color-text-tertiary --color-text-primary --color-text-secondary --tex-invert`；底纹为素材 `Textures/points-bg.png`

## 结构

```jsx
const { Button, EmptyState } = window.Endfield;

<EmptyState icon="i-box" title="还没有项目" action={<Button variant="primary" size="sm" icon="i-plus">新建项目</Button>}>
  新建第一个项目后，这里会显示它的进度与成员。
</EmptyState>
```

## 来源

新增。无，源站没有对应控件。
