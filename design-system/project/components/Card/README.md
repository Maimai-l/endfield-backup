# Card

卡片：条目卡片、信息卡片、读数卡片、可交互卡片与可选卡片。

## 何时使用

列表中的独立条目、概览中的指标、可选择的模板。

## 使用方提供

`.card` 与修饰类；可交互卡片用 `a.card--link`；可选卡片用 `button[data-selectable]` 与 `aria-pressed`；条目卡片用 `.entry`。

## 规则

- 卡片以 1px 边框区分层级，不使用阴影。
- 可交互卡片右上角的箭头静止朝右，悬停时转为右下（源站区块标题的动作）。

## 规格

- **尺寸**：条目卡片：标题条高 32，底色 #2e2e2e，左端 12px 黄色三角，右侧数值 13px Novecento，内容区左缩进 38、右侧放胶囊按钮；信息卡片内边距 16、24；圆角 4；以 1px 边框区分层级，不使用阴影；选中为 2px 墨色边框加右上角三角勾选
- **Token**：`--color-bg-surface --color-border-subtle --color-border-strong --color-checked --color-on-checked --radius-md --font-numeric`
- **键盘**：可交互卡片 `Enter` 打开；可选卡片 `Space` 或 `Enter` 切换选中

## 结构

```html
<a class="card card--link" href="#c-card">
  <span class="card-eyebrow">Interactive</span>
  <span class="card-title">官网改版</span>
  <svg class="ic go"><use href="#i-arrow-dr"></use></svg>
  <span class="card-body">产品部</span>
  <div class="card-foot">
    <code>PRJ-0142</code>
    <span class="stat stat--warn">待处理</span>
  </div>
</a>
```

## 来源

源站改造。NoticeCard；标签与标题的中英配对来自 SectionTitle
