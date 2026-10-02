# IconButton

只有图标的按钮，含方形、关闭与返回、源站圆形翻页按钮三类。

## 何时使用

空间有限且图标含义明确的动作：刷新、筛选、关闭、切换视图。圆形翻页按钮只用于轮播与图集翻页。

## 使用方提供

`icon`、`label`（无障碍名称，必填）、`variant`、`size`；`tooltip` 显示悬浮说明（`"below"` 显示在下方）；切换型按钮传 `pressed` 或 `defaultPressed` 与 `onPressedChange`；`badge` 显示提醒角标。关闭与返回用 `CloseButton`（`kind`、`inverse`），轮播翻页用 `RoundButton`（`direction`、`size`）。

## 规则

- 方形图标按钮高度与相邻按钮一致。
- 圆形翻页按钮按源站结构绘制，不改圆环与箭头比例。
- 不要用图标按钮承载需要文字解释的危险操作。

## 规格

- **尺寸**：关闭与返回只有图标，无底色、无描边、无圆圈：点击区 32，图标 20，关闭悬停时转 90 度（0.4 秒），返回悬停时左移 3px；深色面上为白色图标，悬停转为品牌黄；提醒角标为 8px 橙色菱形 #fb7803，中心落在按钮外框的右上转角；方形 24、32、40，图标 16、16、20；圆形 36、44，按源站 Pagination 圆钮结构：以直径的 1/4.625 为单位 u，外沿 0.25u 白圈叠在 0.375u 灰圈上，箭头宽 1.125u、高 1.6875u，左箭头距左 1.75u、右箭头距左 1.9375u，阴影 0.625u；无文字时必须有 aria-label 与悬浮说明
- **Token**：`同按钮 --radius-full --shadow-sm --color-checked（切换型）`
- **键盘**：同按钮；切换型按 `Space` 切换按下状态（`aria-pressed`）

## 结构

```jsx
const { CloseButton, IconButton } = window.Endfield;

<IconButton icon="i-upload" label="上传" variant="primary" tooltip />
<IconButton icon="i-grid" label="网格视图" defaultPressed />
<CloseButton onClick={close} />
```

## 来源

源站改造。ModalFrame 关闭图标、Pagination 圆钮
