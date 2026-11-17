# Progress

进度条，分任务进度与加载进度两种画法，含确定进度、不确定进度、完成、中止、暂停。

## 何时使用

耗时操作的进度：上传、导出、批量导入。卡片、表单与列表中用任务进度；整页或整个面板等待载入时用加载进度 `prog--frame`。

## 使用方提供

`.prog` 内的标题 `.prog-label`，`.prog-line` 内的 `.prog-track`、`.prog-fill`（`--v`）与数值 `.v`；可选说明 `.prog-note`；`role=progressbar` 与 `aria-valuenow`。

## 规则

- 画法取自游戏系统界面：一条 4px 实线，数值在线的右侧；未完成的部分为 45 度斜纹。
- 填充为正文色 `color-text-primary`，不用品牌黄；品牌黄留给选中与强调。
- 加载进度在线的两端各加一个方括号，其余相同。
- 中止与暂停的填充为 `color-text-tertiary`。状态写成状态词放在说明之前，中止用 `.stat.stat--err`；不用警示色铺填充。
- 不确定进度为一段 30% 宽的实色填充，在线内自左向右循环移动。

## 规格

- **尺寸**：线高 4，直角；斜纹周期 4px，线宽 2px；数值 13px Novecento，与线相隔 12，最小宽 32，右对齐；标题 13，在线的上方，相隔 4；说明 12，在线的下方；方括号宽 4、高 12、线宽 2，与线相隔 4
- **Token**：`--color-text-primary --color-text-tertiary --color-text-disabled --color-text-secondary --color-error --font-numeric`
- **键盘**：不可聚焦；使用 `role="progressbar"` 与 `aria-valuenow`

## 结构

```html
<div class="prog" role="progressbar" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100" aria-label="版本上传">
  <span class="prog-label">版本上传</span>
  <div class="prog-line">
    <div class="prog-track">
      <div class="prog-fill" style="--v:64%"></div>
    </div>
    <span class="v">64%</span>
  </div>
</div>
```

## 来源

新增。画法取自游戏系统界面的任务进度与加载进度。
