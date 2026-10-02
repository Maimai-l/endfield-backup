# Tabs

标签页，含主标签栏、线型、区块、分段四种。

## 何时使用

在同一页面内切换平级的内容视图。主标签栏用于应用的一级分区；分段控件用于视图与筛选切换。

## 使用方提供

`variant`（main 主标签、line 线型、block 区块）、`items`（`{ value, label, icon?, count?, badge?, disabled? }`）、`value` 或 `defaultValue` 与 `onChange`、`ariaLabel`。分段控件用 `SegmentedControl`：`options`（`{ value, label?, icon?, ariaLabel? }`）、`value` 或 `defaultValue` 与 `onChange`、`ariaLabel`。

## 规则

- 主标签选中为纯黄色块，线型标签为底部 2px 指示条。
- 线型标签的文字左缘与下方内容左缘对齐，选中与未选中字重相同，只以颜色和指示条区分。
- 分段控件是选择控件，用胶囊：外框为 1px `color-border-control`，与输入框一致；选中项为内嵌的 `color-checked` 胶囊，四周内距相等；未选中项不加底色，悬停只加深文字。
- 只有选中项在 Tab 顺序中，方向键切换。

## 规格

- **尺寸**：主标签高 48、最小宽 132，图标 20加文字 17 Medium，项之间 1px 竖线，选中为纯黄色块、两端内侧各一道 宽 2、高 10 墨色短竖线，两端显示 Q、E 按键提示，有新内容时在右侧分隔线上端显示 8px 橙色菱形，选中的标签不显示菱形；线型高 40、48，无内边距，项之间 32、40，指示条 2px 与文字等宽，数量为 12 号 Space Grotesk 次要色、选中时转为正文色；区块 44，源站样式，用于切换子页面；分段高 32，选中胶囊高 24、四周内距 4（含 1px 外框），各项等宽，最小宽 72、水平内边距 12，纯图标项宽 32
- **Token**：`--color-text-secondary --color-text-primary --color-checked --color-on-checked --color-bg-muted --color-state-hover --color-border-control --radius-full`
- **键盘**：`左方向键``右方向键` 切换，`Home` 或 `End` 跳到首尾；主标签栏获得焦点时也可用 `Q` 或 `E` 切换；只有选中项在 Tab 顺序中

## 结构

```jsx
const { SegmentedControl, Tabs } = window.Endfield;

<Tabs variant="line" defaultValue="o" items={[{ value: 'o', label: '概览' }, { value: 'a', label: '动态', count: 128 }]} />
<SegmentedControl ariaLabel="时间范围" options={[{ value: '7d', label: '7 天' }, { value: '30d', label: '30 天' }]} />
```

## 来源

源站改造。SubpageTab（区块）。分段控件为新增，胶囊外形参照源站 Selector
