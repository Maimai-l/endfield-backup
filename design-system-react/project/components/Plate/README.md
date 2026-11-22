# Plate

实底块：需要整块强调的对象，深色实底，不随明暗主题变化。

## 何时使用

一屏里处在上游或需要先被看到的对象：总开关、生效中的授权、待确认的命令。同类对象并列且分量相等时用 Card；内容页的整面色块用 Surface。

## 使用方提供

任意内容 `children` 与原生 div 属性；组件自动写入 `data-theme="dark"`。

## 规则

- 实底块不加边框，不加圆角；与页面的区别只靠底色。
- 内部的文字、按钮、进度一律按深色主题取色，所以元素上要写 `data-theme="dark"`。
- 内部的按钮用胶囊按钮（PillButton）。
- 一屏里实底块的总面积小于内容区的三分之一；不把每个对象都放进实底块。
- 实底块之间、实底块与其余内容之间不小于 `space-4`；不嵌套。

## 规格

- **尺寸**：内边距 24；底色 #2e2e2e，文字白色；宽高随内容或由所在栅格决定
- **Token**：`--strip --strip-fg --strip-meta`

## 结构

```jsx
const { PillButton, Plate } = window.Endfield;

<Plate>
  <span className="kf-en">Tunnel</span>
  <span className="cs-name">外网访问</span>
  <span className="cs-state">已开启</span>
  <PillButton size="sm">关闭</PillButton>
</Plate>
```

## 来源

新增。底色与条目卡片、提示条的标题条相同；深色实底块取自源站的深色按钮与标签块。
