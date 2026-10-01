# Pagination

分页器：完整分页、简洁分页与源站翻页胶囊。

## 何时使用

列表与表格的分页。翻页胶囊只用于轮播与图集。

## 使用方提供

`[data-pager]` 容器内的 `.pg` 按钮（当前页 `aria-current="page"`）；翻页胶囊 `[data-pcap]` 加 `data-total`。

## 规则

- 超过 7 页时折叠中间页，折叠处用“更多”图标。
- 当前页为墨底黄字（深色反转）。

## 规格

- **尺寸**：页码 宽 32、高 32，间距 4，数字 13px Novecento；超过 7 页折叠中间页；当前页为墨底黄字（深色反转）
- **Token**：`--color-checked --color-on-checked --color-state-hover --color-text-disabled --font-numeric`
- **键盘**：`Tab` 聚焦页码，`Enter` 跳转；当前页标注 `aria-current="page"`

## 结构

```html
<nav class="pager" aria-label="分页">
  <span class="total">
    共
    <b>248</b>
    条
  </span>
  <button class="pg" type="button" aria-label="上一页">
    <svg class="ic"><use href="#i-chev-l"></use></svg>
  </button>
  <button class="pg" type="button">1</button>
  <button class="pg" type="button">2</button>
  <button class="pg" type="button" aria-current="page">3</button>
  <button class="pg" type="button">4</button>
  <button class="pg" type="button">5</button>
  <span class="pg-gap" aria-hidden="true">
    <svg class="ic"><use href="#i-more"></use></svg>
  </span>
  <button class="pg" type="button">25</button>
  <button class="pg" type="button" aria-label="下一页">
    <svg class="ic"><use href="#i-chev-r"></use></svg>
  </button>
  <span class="size">
    <button class="input select input--sm" type="button" aria-label="每页条数">
      <span class="val">每页 10 条</span>
      <svg class="ic tri"><use href="#i-tri-d"></use></svg>
    </button>
  </span>
  <span class="jump">
    跳至
    <span class="input input--sm">
      <input aria-label="页码" value="3" inputmode="numeric">
    </span>
    页
  </span>
</nav>
```

## 来源

源站改造。Pagination（胶囊，仅保留给轮播）
