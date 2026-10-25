# PillButton

游戏界面来源的全圆角按钮：确认按钮与实底胶囊按钮。

## 何时使用

- 确认按钮：面板或流程的最终操作，如交易、开始追踪；每屏至多一个，放在面板右下角。
- 实底胶囊按钮：打开总览、简报等次级视图的入口，文字后带图标；灰色 `pill--muted` 为次一级的入口。
- 小号胶囊按钮：行内与卡片内的就地操作，如查看位置、更换货品、条目卡片的前往；带图标时图标放在左侧墨色圆内。

## 使用方提供

确认按钮用 `ConfirmButton`，文字 `children`；实底胶囊按钮用 `PillButton`：`variant`（default、muted）、`size`（md、sm）、`icon`（md 显示在文字后，sm 显示在左侧墨色圆内）、文字 `children`。

## 规则

- 与官网来源的直角按钮分属两套体系：同一面板内只用一种，不把直角按钮与胶囊按钮并排。
- 确认按钮的文字靠右，左侧细线随按钮宽度伸缩，不放其他内容；悬停只改变底色，不加其他动作。
- 文字为动词或名词短语，2 至 6 个字；不在按钮上用 unicode 箭头或符号。
- 浅色主题按设计系统惯例反转为深底浅字。

## 规格

- **尺寸**：确认按钮按游戏截图逐像素叠合测定（截图中高 61，按 40 换算）：高 40、最小宽 192，右内距 12；距外沿 1.4px 处起为 1.25px `color-on-pill` 内圈；左侧细线粗 1.3、起点距左缘 24.9、终点距文字 20.6，颜色为 `color-on-pill` 19% 混入 `color-primary`，两端圆点直径 2.3，为 49% 混入；文字 16，SansRegular；右端图标圆 21，与文字相隔 10.4；纹理为 Textures 组的 `confirm-texture.png`，贴按钮右端，高度与按钮一致，颜色为 19% 混入 `color-primary`；细线、圆点与纹理用固定颜色，悬停时只有底色变为 `color-primary-hover`。实底胶囊按钮高 32、最小宽 144，左右内距 16，文字 16，尾部图标 16、线宽 2.4。小号高 24，文字 14，图标圆 16，四周内距 4。禁用为 `color-bg-disabled` 底与禁用文字色。
- **Token**：`--color-primary --color-primary-hover --color-primary-active --color-on-pill --color-pill-muted --color-on-secondary --color-bg-disabled --color-text-disabled --radius-full`
- **键盘**：`Enter` 或 `Space` 触发

## 结构

```jsx
const { ConfirmButton, PillButton } = window.Endfield;

<ConfirmButton onClick={trade}>交易</ConfirmButton>
<PillButton icon="i-menu">事务总览</PillButton>
<PillButton size="sm" icon="i-pin">查看位置</PillButton>
```

## 来源

游戏界面。地区建设：交易与开始追踪按钮、事务总览、收支简报、查看位置、更换货品
