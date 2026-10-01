# Loading

局部加载：旋转圆环与骨架块。

## 何时使用

区域内容加载超过 300ms 时。整页阻塞加载用页面加载。

## 使用方提供

`size`（16、20、32）；旁边需要文字时传 `label`。骨架占位用 `Skeleton`（`width`、`height`、`round`）。

## 规则

- 旋转圆环 16、20、32 三档。
- 骨架块明暗交替，不使用渐变扫光。

## 规格

- **尺寸**：旋转圆环 16、20、32，线宽 2、2、3，0.75 秒一周，缺口为四分之一；骨架块圆角 2，高度与所替代文字一致，1.2 秒明暗交替；操作超过 300ms 才显示
- **Token**：`--color-border-subtle --color-text-primary --color-bg-muted --color-state-hover`
- **键盘**：不可聚焦；指示器使用 `role="status"` 并提供文字标签

## 结构

```jsx
const { Loading, Skeleton } = window.Endfield;

<Loading size={16} label="正在读取 18 个文件" />
<Skeleton width="60%" height={12} />
```

## 来源

新增。无，源站没有对应控件。
