# TopBar

页面顶栏，槽位从左到右为标题区、搜索、操作、账户。

## 何时使用

每个页面的顶部，与侧边导航配合。

## 使用方提供

`header.topbar` 内依次放 `.title`（必需，可带面包屑）、`.input.search`、`.acts`（0 至 3 个按钮）、账户头像。

## 规则

- 缺省的槽位直接省略。
- 操作区至多一个主要按钮。
- 侧边导航已有账户入口时，顶栏不再放账户。

## 规格

- **尺寸**：高 56，左右内边距 16，槽位间距 16；标题 16 Medium，面包屑 12；搜索框 md 32、宽 220；操作区按钮 md 32；账户头像 28；底部 1px 分隔线
- **Token**：`--color-bg-page --color-border-subtle --color-text-primary --size-control-md`
- **键盘**：顶栏使用 `header` 元素；`Tab` 顺序与槽位顺序一致

## 结构

```html
<header class="topbar">
  <div class="title">
    <b>设备总览</b>
  </div>
</header>
```

## 来源

新增。无，源站没有对应控件。
