# PageLoader

整页加载层，按源站首屏加载重建：纵向进度条与跟随读数，完成后黄色矩形自左向右覆盖再淡出。

## 何时使用

应用首次启动、切换工作区、整页数据重载，且预计超过 1 秒。

## 使用方提供

`[data-ldr]` 容器内的 `.ldr-app`（页面内容）与 `.ldr-screen`（加载层，`role=progressbar`）；`Endfield.runLoader(el)` 播放；真实场景中由数据加载进度设置 `--p`。

## 规则

- 容器宽度小于 480 时自动改为底部横向进度条。
- 进度填充用 `color-checked`，完成覆盖用品牌黄 `y-300`。

## 规格

- **用途**：阻塞整页且预计超过 1 秒的加载：应用首次启动、切换工作区、整页数据重载。局部区域的加载使用加载指示器
- **尺寸**：纵向：左侧进度条宽 10，自上而下填充；读数跟随填充末端，距左 25，数值 35 SansMedium，百分号 26，上方为宽 4、高 15 的竖条标记，末端处为两枚 4px 灰色方块，下方为 11 号状态文字。横向：进度条距底 64，宽 82%，高 8，自左向右填充，读数跟随末端。完成后黄色矩形自左向右覆盖整个加载层（0.6 秒，缓动 cubic-bezier(1, 0, .7, 1)，延迟 0.3 秒），1 秒后整层在 0.5 秒内淡出，露出页面
- **Token**：`--color-checked --color-text-secondary --color-bg-page --y-300 --font-medium`
- **键盘**：不可聚焦；加载层使用 `role="progressbar"` 并更新 `aria-valuenow`，淡出后设为不可见，焦点移到页面主标题

## 结构

```html
<div class="ldr">
  <div class="ldr-app" aria-hidden="true">
    <h5>北区装配线</h5>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
  </div>
  <div class="ldr-screen" role="progressbar" aria-label="正在载入工作区" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
    <div class="ldr-bar">
      <i></i>
    </div>
    <div class="ldr-read" aria-hidden="true">
      <span class="ldr-core">
        <span>
          <b>0</b>
          <small>%</small>
        </span>
      </span>
      <span class="ldr-deco"></span>
      <span class="ldr-label">正在载入工作区</span>
    </div>
  </div>
</div>
```

## 来源

源站改造。源站首屏 Loading
