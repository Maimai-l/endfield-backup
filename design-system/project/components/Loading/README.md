# Loading

局部加载：旋转圆环与骨架块。

## 何时使用

区域内容加载超过 300ms 时。整页阻塞加载用页面加载。

## 使用方提供

`.spin` 加 `role="status"` 与文字标签；骨架块 `.skel` 的高度与被替代的文字一致，容器加 `aria-busy`。

## 规则

- 旋转圆环 16、20、32 三档。
- 骨架块明暗交替，不使用渐变扫光。

## 规格

- **尺寸**：旋转圆环 16、20、32，线宽 2、2、3，0.75 秒一周，缺口为四分之一；骨架块圆角 2，高度与所替代文字一致，1.2 秒明暗交替；操作超过 300ms 才显示
- **Token**：`--color-border-subtle --color-text-primary --color-bg-muted --color-state-hover`
- **键盘**：不可聚焦；指示器使用 `role="status"` 并提供文字标签

## 结构

```html
<span class="spin spin--track spin--16" role="status" aria-label="加载中"></span>
```

## 来源

新增。无，源站没有对应控件。
