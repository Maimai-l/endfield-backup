# Sidebar

侧边导航，由标识区、导航项、分组标题、底部工具区四个元素组成，收起 64、展开 224。

## 何时使用

应用的一级导航。

## 使用方提供

`[data-sn]` 的 `nav`：`.sn-head`（必需）、`.sn-list` 内的 `.sn-item`（必需，2 至 8 项）、可选 `.sn-group` 与 `.sn-cap`。

## 规则

- 可选元素省略时不留空位。
- 超过 6 项时分组；更多入口放到二级页面。
- 展开面板覆盖内容，不推挤页面。

## 规格

- **尺寸**：收起 64，展开 224；标识区高 64；导航项高 44，分组标题高 28，图标 22（源站图标），文字 15 Medium；指示块为 6px 墨色左边加#e6e6e6 底（深色为黄色左边加#35373c 底），收起宽 56、展开宽 216；图标默认 #d9d9d9，悬停 #858585，当前 #191919；展开时面板覆盖内容并带 0 0 8px 阴影；底部胶囊宽 40、全圆角，展开后宽 200、圆角 4；过渡均为 0.3s
- **Token**：`--nav-icon --nav-icon-hover --nav-indicator --nav-bar --nav-hover --nav-capsule --shadow-panel --duration-slow`
- **键盘**：`Tab` 进入侧栏即展开，在导航项之间移动，`Enter` 打开；焦点离开侧栏后收起；当前页标注 `aria-current="page"`

## 结构

```html
<div class="sn">
  <div class="sn-head">
    <button class="sn-toggle" type="button" tabindex="-1" aria-hidden="true">
      <span class="mark"></span>
    </button>
    <span class="sn-name">Ops Console</span>
  </div>
</div>
```

## 来源

源站改造。NavSidebar（黑色指示条）
