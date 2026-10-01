# Switch

开关，用于立即生效的二元设置。

## 何时使用

切换后立刻生效、无需提交的设置。需要提交的表单用复选框。

## 使用方提供

`<label class="switch"><input type="checkbox"><span class="track"></span></label>`，加可见文字说明开关作用。

## 规则

- 开启为墨色轨道配黄色滑块（`color-checked`）。
- 提交中显示加载状态并禁止再次切换。

## 规格

- **尺寸**：轨道分两档，宽 32、高 18 与宽 40、高 22，圆角 2；滑块对应为 14 与 18 方形，圆角 1；开启为墨色轨道配黄色滑块
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

新增。无，源站没有对应控件。
