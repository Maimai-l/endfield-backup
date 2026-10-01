# Dialog

模态对话框，含普通确认与危险确认两类。

## 何时使用

需要用户确认或补充信息才能继续的操作。不可撤销的删除用危险确认，并要求输入对象编号。

## 使用方提供

`open` 与 `onClose`、`title`、正文 `children`；危险确认传 `danger`，需要输入确认文字时传 `confirmText`；`confirmLabel`、`cancelLabel`、`onConfirm`；自定义底部用 `footer`。嵌在页面中作规格展示时传 `inline`。

## 规则

- 宽 400、560、800 三档；主要操作在最右。
- 危险确认的标题栏为源站深色条纹底；红色只出现在确认按钮上。
- Esc 关闭，焦点锁定在对话框内，关闭后回到触发按钮。

## 规格

- **尺寸**：宽 400、560、800；标题栏 56；内容内边距 24；底部操作区 64，主要操作在最右
- **Token**：`--color-bg-raised --color-bg-overlay --shadow-lg --radius-md --color-border-subtle`
- **键盘**：`Esc` 关闭；`Tab` 在对话框内循环；关闭后焦点回到触发按钮

## 结构

```jsx
const { Dialog } = window.Endfield;

<Dialog open={open} onClose={() => setOpen(false)} danger title="删除项目" confirmText="PRJ-0142" onConfirm={remove}>
  <p>删除后该项目的记录将一并清除，且无法恢复。</p>
</Dialog>
```

## 来源

源站改造。ModalFrame
