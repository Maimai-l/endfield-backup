# TextArea

多行文本框，右下角显示字数。

## 何时使用

输入多行说明：故障描述、备注。

## 使用方提供

`<textarea data-max="200">` 与同一 `.field` 内的 `.count`，由 `Endfield.init` 更新计数。

## 规则

- 最少显示 3 行，超出 10 行后滚动。
- 字数上限写在 `data-max` 与 `maxlength`。

## 规格

- **尺寸**：最小高 80；内边距 8、12；字号 14，行高 1.6；右下角字数计数 12px Space Grotesk
- **Token**：`同单行文本框`
- **键盘**：`Tab` 离开输入区，不插入制表符

## 结构

```html
<div class="field" style="width:340px">
  <label class="field-label" for="ta1">故障描述</label>
  <div class="input input--area">
    <textarea id="ta1" maxlength="200" placeholder="记录现象、发生时间和已采取的措施">06:40 巡检发现 A-02 驱动端异响，已降速至 60%。</textarea>
  </div>
  <div class="field-help">
    <span>最少 3 行，超出 10 行后滚动</span>
    <span class="count" id="ta1c">31/200</span>
  </div>
</div>
```

## 来源

新增。无，源站没有对应控件。
