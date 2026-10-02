# Pagination

分页器：完整分页、简洁分页与源站翻页胶囊。

## 何时使用

列表与表格的分页。翻页胶囊只用于轮播与图集。

## 使用方提供

`total` 总条数、`pageSize`、`page` 或 `defaultPage` 与 `onChange`；`variant`（full、simple）；`extras` 控制“每页条数”与“跳至”。轮播翻页用 `PageCapsule`（`total` 总页数、`page` 或 `defaultPage`）。

## 规则

- 超过 7 页时折叠中间页，折叠处用“更多”图标。
- 当前页为墨底黄字（深色反转）。
- 翻页胶囊按源站排布：页码一次排好，窗口显示 4 个（不足 4 页时按页数收窄）；当前页越出窗口时整排平移 0.3 秒，使其刚好落在窗口边缘。当前页用 Novecento Bold 正文色，其余为 Medium 次要色，页码之间 1px 竖线，窗口两端渐隐。

## 规格

- **尺寸**：页码 宽 32、高 32，间距 4，数字 13px Novecento；超过 7 页折叠中间页；当前页为墨底黄字（深色反转）；翻页胶囊以源站 rem 为单位 u（默认 u = 36 / 4.625）：高 5.25u、外框 0.375u、圆按钮 4.625u、按钮与页码间距 0.5u，每个页码宽 4u、竖线高 u，数字 1.25u（不小于 12px）
- **Token**：`--color-checked --color-on-checked --color-state-hover --color-text-disabled --font-numeric --font-giant --track-bg --track-edge --track-stripe --duration-slow`
- **键盘**：`Tab` 聚焦页码，`Enter` 跳转；当前页标注 `aria-current="page"`

## 结构

```jsx
const { Pagination } = window.Endfield;

<Pagination total={248} page={page} onChange={setPage} />
```

## 来源

源站改造。Pagination（胶囊，仅保留给轮播）
