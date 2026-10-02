# Button

触发一个动作的按钮，分主要、强调、次要、幽灵、危险五种，高 24、32、40 三档。

## 何时使用

提交、保存、删除等明确的动作。跳转到另一页面用链接；列表与卡片里的“前往”用胶囊按钮。

## 使用方提供

文字（动词开头，2 至 6 个字）；可选前置图标 `.lbl > .ic`；尺寸类 `btn--sm` / `btn--lg`；加载中加 `is-loading` 与 `aria-busy`。

## 规则

- 每屏至多一个强调按钮 `btn--accent`；主要操作用 `btn--primary`。
- 同一行内按钮与输入框取同一档高度（`size-control-*`）。
- 左侧竖条只出现在纯文字的主要、强调、危险按钮上；带图标的按钮由图标执行动作。
- 不要在按钮上用 unicode 箭头或符号，图标一律用 `bundle.js` 提供的 SVG。

## 规格

- **尺寸**：高 24、32、40；比例取自源站按钮（高 72、宽 320）：最小宽度为高度的 4.5 倍（108、144、180），文字居中并下移高度的 0.054 倍以补偿字形重心；水平内边距 12、16、20；字号为高度的 7/18（md 约 12.4、lg 约 15.6），sm 保持 12；主要、强调按钮的纹理覆盖在文字之上，外投影为高度的 1/18、25% 黑色；主要按钮文字为 #eeeeee，悬停变为 #ffffff；胶囊按钮高 32、最小宽 144、全圆角，文字在箭头圆左侧的区域内居中，右侧 22px 墨色圆内为箭头，悬停时圆变为黄色、箭头右移 2px，进行中为无边框灰底；纯文字的主要、强调、危险按钮左侧有竖条（源站标志），距左缘为高度的 1/9，宽为高度的 1/18，高为高度的 0.55 倍，垂直居中；悬停时竖条变为指向右侧的三角并右移高度的 0.194 倍，圆角从 2px 变为 6px；带前置图标的按钮与次要、幽灵按钮不显示竖条，改由图标执行动作：加号悬停转 90 度，箭头悬停右移 3px，刷新点击转一周
- **Token**：`--color-primary --color-primary-hover --color-primary-active --color-primary-tick --color-on-primary --color-on-primary-hover --color-accent --color-accent-hover --color-accent-active --color-error --color-border-control --color-state-hover --color-state-pressed --radius-sm --size-control-*`
- **键盘**：`Enter` 或 `Space` 触发；加载中不响应重复触发

## 结构

```html
<button class="btn btn--primary" type="button">
  <span class="lbl">保存设置</span>
</button>
```

## 来源

源站改造。Button（主要）、HomeButton（强调）
