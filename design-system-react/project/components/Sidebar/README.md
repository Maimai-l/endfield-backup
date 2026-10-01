# Sidebar

侧边导航，由标识区、导航项、分组标题、底部工具区四个元素组成，收起 64、展开 224。

## 何时使用

应用的一级导航。

## 使用方提供

`name` 产品名、`items`（`{ value, label, icon, href?, badge? }`，分组标题为 `{ group }`）、`value` 或 `defaultValue` 与 `onChange`、`tools`（底部工具区，`{ label, icon, onClick? }`，1 至 3 个）。悬停或聚焦时展开，单击左上角标记固定展开。

## 规则

- 可选元素省略时不留空位。
- 超过 6 项时分组；更多入口放到二级页面。
- 展开面板覆盖内容，不推挤页面。

## 规格

- **尺寸**：收起 64，展开 224；标识区高 64；导航项高 44，分组标题高 36（首个 28），组名贴近下方子项（距子项 4），与上一组之间留出更大距离，展开时组名左缘与导航图标左缘对齐（距侧栏左边 21），字号 11，两字组名宽 22，与图标列等宽；组名在图标列，子项文字在文字列，层级由列区分；图标 22（源站图标）；指示块为 6px 墨色左边加#e6e6e6 底（深色为黄色左边加#35373c 底），收起宽 58、展开宽 212（右边与展开后的底部工具区右边重合）；导航图标与底部工具区图标同为 #858585，悬停与当前为正文色；文字 14 Medium，底部工具区文字与导航项文字同列左对齐；展开时面板覆盖内容并带 0 0 8px 阴影；底部胶囊宽 40、全圆角，展开后宽 200、圆角 4；过渡均为 0.3s
- **Token**：`--nav-icon --nav-icon-hover --nav-indicator --nav-bar --nav-hover --nav-capsule --shadow-panel --duration-slow`
- **键盘**：`Tab` 进入侧栏即展开，在导航项之间移动，`Enter` 打开；焦点离开侧栏后收起；当前页标注 `aria-current="page"`

## 结构

```jsx
const { Sidebar } = window.Endfield;

<Sidebar name="Ops Console" value={page} onChange={setPage}
  items={[{ value: 'home', label: '总览', icon: 'n-home' }, { group: '管理' }, { value: 'arc', label: '归档', icon: 'n-lore' }]}
  tools={[{ label: '设置', icon: 'i-sliders', onClick: openSettings }]} />
```

## 来源

源站改造。NavSidebar（黑色指示条）
