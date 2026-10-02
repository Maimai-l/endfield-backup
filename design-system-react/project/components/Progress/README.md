# Progress

进度条，含确定进度、不确定进度、完成、错误、暂停。

## 何时使用

耗时操作的进度：上传、导出、批量导入。

## 使用方提供

`label`、`value`（0 至 100，省略为不确定进度）、`valueText`、`thin`、`status`（done、error、paused）、`note`。

## 规则

- 轨道为纯色 `track-bg`，不加斜纹。
- 不确定进度为一段 30% 宽的实色填充，在轨道内自左向右循环移动。

## 规格

- **尺寸**：高 8（标准）、4（细型），圆角 1；百分比 12px Novecento，等宽数字
- **Token**：`--color-bg-muted --color-checked --color-error --font-numeric`
- **键盘**：不可聚焦；使用 `role="progressbar"` 与 `aria-valuenow`

## 结构

```jsx
const { Progress } = window.Endfield;

<Progress label="版本上传" value={64} />
<Progress label="同步 B-11" value={72} status="error" note="项目无响应，已中止" />
```

## 来源

新增。无，源站没有对应控件。
