# Switch

开关，用于立即生效的二元设置。

## 何时使用

切换后立刻生效、无需提交的设置。需要提交的表单用复选框。

## 使用方提供

`<label class="switch"><input type="checkbox"><span class="track"></span></label>`，加可见文字说明开关作用；竖向开关为 `<button class="vswitch" role="switch" aria-checked="false" aria-label="…">`，尺寸由 `--u` 控制。

## 规则

- 开启为墨色轨道配黄色滑块（`color-checked`）。
- 提交中显示加载状态并禁止再次切换。
- 竖向开关只用于深色场景画面上的视图切换（例如二维与三维），放在画面右侧。

## 规格

- **尺寸**：轨道为全圆角胶囊，两档宽 36、高 20 与宽 44、高 24，1.5px `color-border-control` 描边；滑块为圆形，直径 12 与 15；关闭为描边轨道配灰色滑块，开启为墨色轨道配黄色滑块（深色主题为黄色轨道配墨色滑块）；滑块移动 0.25 秒，轨道变色 0.2 秒；竖向开关按源站结构绘制：宽 4.5u、高 7.5u（u 默认 16px），3px #666 描边，半透明黑底，滑块直径 3u，开启后向下移动
- **Token**：`--color-border-control --color-checked --color-on-checked --color-bg-page --duration-base`
- **键盘**：`Space` 切换

## 结构

```html
<label class="switch">
  <input type="checkbox" role="switch">
  <span class="track"></span>
  自动降速
</label>
```

## 来源

新增。竖向开关取自源站地图页的二维与三维切换。
