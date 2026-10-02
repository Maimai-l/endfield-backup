# TextArea

多行文本框，右下角显示字数。

## 何时使用

输入多行说明：描述、备注。

## 使用方提供

`<textarea data-max="200">` 与同一 `.field` 内的 `.count`，由 `Endfield.init` 更新计数。

## 规则

- 最少显示 3 行，超出 10 行后滚动。
- 字数上限写在 `data-max` 与 `maxlength`。

## 规格

- **尺寸**：最小高 80；圆角 16（`radius-lg`）；内边距 10、16；描边与文本框相同；字号 14，行高 1.6；右下角字数计数 12px Space Grotesk
- **Token**：`同单行文本框`
- **键盘**：`Tab` 离开输入区，不插入制表符

## 结构

```html
<div class="field" style="width:340px">
  <label class="field-label" for="ta1">描述</label>
  <div class="input input--area">
    <textarea id="ta1" maxlength="200" placeholder="补充背景与目标">本季度目标是完成三项核心功能的上线。</textarea>
  </div>
  <div class="field-help">
    <span></span>
    <span class="count" id="ta1c">31/200</span>
  </div>
</div>
```

## 来源

新增。无，源站没有对应控件。
