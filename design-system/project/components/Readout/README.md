# Readout

读数：多行的标签与数值，用于状态卡、详情面板等需要并列多项小读数的位置。

## 何时使用

一个对象的多项属性，例如端口、版本、时间、计数。单个需要突出的指标用 Card 的读数卡片。

## 使用方提供

`<dl class="readout">`，每项为 `<div><dt>标签</dt><dd>数值</dd></div>`；纯数字的数值加 `class="num"`，编号、域名等字母与数字混排的数值写在 `<code>` 中。

## 规则

- 同类对象用同一组标签、同一顺序。
- 数值按字体分工排：纯数字用 `font-numeric`，字母与数字混排用 `font-en`，中文用 Sans。
- 没有数值时写“无”，不留空，不用符号代替。
- 不写说明句。

## 规格

- **尺寸**：每行高 20，行距 8；标签 12px `color-text-secondary`，左对齐；数值 14px `color-text-primary`，右对齐，超出时截断；`code` 为 12px；标签与数值按行的中线对齐
- **Token**：`--color-text-secondary --color-text-primary --font-body --font-numeric --font-en`

## 结构

```html
<dl class="readout">
  <div><dt>地址</dt><dd><code>mcp.local</code></dd></div>
  <div><dt>端口</dt><dd class="num">8400</dd></div>
  <div><dt>所属分组</dt><dd>渲染节点</dd></div>
</dl>
```

## 来源

新增。
