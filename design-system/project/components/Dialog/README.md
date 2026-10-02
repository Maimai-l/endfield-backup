# Dialog

模态对话框，含普通确认与危险确认两类。

## 何时使用

需要用户确认或补充信息才能继续的操作。不可撤销的删除用危险确认，并要求输入对象编号。

## 使用方提供

原生 `<dialog>`；触发按钮 `data-open="<id>"`；关闭按钮 `data-close`；危险确认的输入框 `data-confirm="<编号>"` 与确认按钮 `data-confirm-go`。

## 规则

- 宽 400、560、800 三档；主要操作在最右，取消用次要按钮，与主要按钮同宽。
- 危险确认的标题栏为源站深色条纹底；红色只出现在确认按钮上。
- Esc 关闭，焦点锁定在对话框内，关闭后回到触发按钮。

## 规格

- **尺寸**：宽 400、560、800；标题栏 56；内容内边距 24；底部操作区 64，主要操作在最右
- **Token**：`--color-bg-raised --color-bg-overlay --shadow-lg --radius-md --color-border-subtle`
- **键盘**：`Esc` 关闭；`Tab` 在对话框内循环；关闭后焦点回到触发按钮

## 结构

```html
<div class="dialog dialog--danger" role="alertdialog" aria-labelledby="d2t">
  <div class="dlg-head">
    <h4 id="d2t">删除项目</h4>
    <button class="cbtn cbtn--inv" type="button" aria-label="关闭">
      <svg class="ic ic--close"><use href="#i-close"></use></svg>
    </button>
  </div>
  <div class="dlg-body">
    <p>
      删除后该项目的 1,284 条记录将一并清除，且无法恢复。输入
      <span class="confirm-code">PRJ-0142</span>
      以确认。
    </p>
    <div class="input">
      <input aria-label="确认编号" placeholder="PRJ-0142">
    </div>
  </div>
  <div class="dlg-foot">
    <button class="btn btn--secondary" type="button">
      <span class="lbl">取消</span>
    </button>
    <button class="btn btn--danger" type="button">
      <span class="lbl">删除</span>
    </button>
  </div>
</div>
```

## 来源

源站改造。ModalFrame
