# Toast

操作结果的短暂反馈，出现在页面顶部居中，可带一个操作。

## 何时使用

保存、删除、复制等操作完成或失败后。需要用户处理的问题用页面内提示条或对话框。

## 使用方提供

页面内一个 `.toast-stack` 容器；调用 `Endfield.toast(type, 文案, 操作)`，或按钮 `data-toast` 加 `data-msg`、`data-action`。

## 规则

- 停留 4 秒，含操作时 8 秒，悬停暂停；错误类不自动消失。
- 同时最多 3 条，新的在下。
- 文案说明结果，不写“成功！”这类空话。

## 规格

- **尺寸**：宽 320 到 420，最小高 44，墨色底，左侧 4px 纯色色条；停留 4 秒，含操作时 8 秒，悬停暂停；错误类不自动消失
- **Token**：`--color-bg-emphasis --color-text-on-emphasis --color-success --color-error --color-warning --shadow-lg --radius-sm`
- **键盘**：不抢占焦点；操作按钮与关闭按钮可用 `Tab` 到达；错误类需手动关闭

## 结构

```html
<div class="toast toast--success">
  <svg class="ic"><use href="#s-success"></use></svg>
  <div class="msg">任务 TK-0930 已关闭</div>
  <button class="act" type="button">撤销</button>
</div>
```

## 来源

源站改造。Toast（rgba 黑底居中）
