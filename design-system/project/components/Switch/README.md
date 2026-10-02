# Switch

开关，用于立即生效的二元设置。

## 何时使用

切换后立刻生效、无需提交的设置。需要提交的表单用复选框。

## 使用方提供

`<label class="switch"><input type="checkbox"><span class="track"></span></label>`，加可见文字说明开关作用；竖向开关为 `.vsfield` 内的 `<button class="vswitch" role="switch" aria-checked="false" aria-label="…">` 加 `.vs-opts` 两个选项文字（上为关闭时的选项，下为开启时的选项）；大尺寸加 `vswitch--lg`。

## 规则

- 开启为墨色轨道配黄色滑块（`color-checked`）。
- 提交中显示加载状态并禁止再次切换。
- 竖向开关用于两个视图之间的切换（例如二维与三维），右侧必须写出两个选项，当前选项为正文色，另一个为次要色。

## 规格

- **尺寸**：轨道为全圆角胶囊，两档宽 36、高 20 与宽 44、高 24，1.5px `color-border-control` 描边；滑块为圆形，直径 12 与 15；关闭为描边轨道配灰色滑块，开启为墨色轨道配黄色滑块（深色主题为黄色轨道配墨色滑块）；滑块移动 0.25 秒，轨道变色 0.2 秒；竖向开关按源站比例绘制：宽 4.5u、高 7.5u、滑块直径 3u，滑块四周留白相等（0.75u），开启后向下移动 3u；两档 u 为 8 与 16，即 36×60 与 72×120（源站原尺寸），描边 1.5 与 3；颜色与状态同横向开关；选项文字的中心与滑块两个位置的中心重合
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
