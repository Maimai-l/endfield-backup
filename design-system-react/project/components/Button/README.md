# Button

触发一个动作的按钮，分主要、强调、次要、幽灵、危险五种，高 24、32、40 三档。

## 何时使用

提交、保存、删除等明确的动作。跳转到另一页面用链接；列表与卡片里的“前往”用胶囊按钮。

## 使用方提供

`variant`（primary、accent、secondary、ghost、danger，默认 secondary）、`size`（sm、md、lg）、文字 `children`（动词开头，2 至 6 个字）；可选前置图标 `icon`、后置图标 `iconEnd`、提交中 `loading`、`disabled` 与原生按钮属性。胶囊按钮用 `CapsuleButton`，进行中传 `busy`。

## 规则

- 每屏至多一个强调按钮 `variant="accent"`；主要操作用 `variant="primary"`。
- 同一行内按钮与输入框取同一档高度（`size-control-*`）。
- 左侧竖条只出现在纯文字的主要、强调、危险按钮上；带图标的按钮由图标执行动作。
- 不要在按钮上用 unicode 箭头或符号，图标一律用 `Icon` 组件或组件的 `icon` 属性。

## 规格

- **尺寸**：高 24、32、40；最小宽度为高度的 4 倍（96、128、160），保持细长比例，文字居中；水平内边距 12、16、20；字号 12、13、14；胶囊按钮高 32、最小宽 144、全圆角，文字在箭头圆左侧的区域内居中，右侧 22px 墨色圆内为箭头，悬停时圆变为黄色、箭头右移 2px，进行中为无边框灰底；纯文字的主要、强调、危险按钮左侧有 2px 竖条（源站标志），悬停时竖条变为指向右侧的三角、圆角从 2px 变为 6px；带前置图标的按钮与次要、幽灵按钮不显示竖条，改由图标执行动作：加号悬停转 90 度，箭头悬停右移 3px，刷新点击转一周
- **Token**：`--color-primary --color-primary-hover --color-primary-active --color-primary-tick --color-accent --color-accent-hover --color-accent-active --color-error --color-border-control --color-state-hover --color-state-pressed --radius-sm --size-control-*`
- **键盘**：`Enter` 或 `Space` 触发；加载中不响应重复触发

## 结构

```jsx
const { Button, CapsuleButton } = window.Endfield;

<Button variant="primary">保存设置</Button>
<Button icon="i-plus">新建任务</Button>
<CapsuleButton>前往</CapsuleButton>
```

## 来源

源站改造。Button（主要）、HomeButton（强调）
