# Progress

进度条，含确定进度、不确定进度、完成、错误、暂停。

## 何时使用

耗时操作的进度：上传、导出、批量导入。

## 使用方提供

`.prog` 内的标题、百分比、`.prog-track` 与 `.prog-fill`（`--v`）；`role=progressbar` 与 `aria-valuenow`。

## 规则

- 轨道使用选择轨道纹理 `tex-track`。
- 不确定进度为一段 30% 宽的实色填充，在轨道内自左向右循环移动。

## 规格

- **尺寸**：高 8（标准）、4（细型），圆角 1；百分比 12px Novecento，等宽数字
- **Token**：`--color-bg-muted --color-checked --color-error --font-numeric`
- **键盘**：不可聚焦；使用 `role="progressbar"` 与 `aria-valuenow`

## 结构

```html
<div class="prog" role="progressbar" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100" aria-label="版本上传">
  <div class="prog-top">
    <span>版本上传</span>
    <span class="v">64%</span>
  </div>
  <div class="prog-track">
    <div class="prog-fill" style="--v:64%"></div>
  </div>
</div>
```

## 来源

新增。无，源站没有对应控件。
