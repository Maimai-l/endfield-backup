# TopBar

页面顶栏，槽位从左到右为标题区、搜索、操作、账户。

## 何时使用

每个页面的顶部，与侧边导航配合。

## 使用方提供

`title`；可选 `crumbs`（面包屑）、`search`（搜索框占位文字）与 `onSearch`、`actions`（0 至 3 个按钮）、`account`（账户入口）。缺省的槽位直接省略。

## 规则

- 缺省的槽位直接省略。
- 操作区至多一个主要按钮。
- 侧边导航已有账户入口时，顶栏不再放账户。

## 规格

- **尺寸**：高 56，左右内边距 16，槽位间距 16；标题 16 Medium，面包屑 12；搜索框 sm 24、宽 220（胶囊与方形按钮高度相差一档）；操作区按钮 md 32；账户头像 28；底部 1px 分隔线
- **Token**：`--color-bg-page --color-border-subtle --color-text-primary --size-control-md`
- **键盘**：顶栏使用 `header` 元素；`Tab` 顺序与槽位顺序一致

## 结构

```jsx
const { Button, TopBar } = window.Endfield;

<TopBar title="产品部" crumbs={[{ label: '项目', href: '/' }, { label: '产品部' }]} search="搜索项目编号"
  actions={<Button variant="primary" icon="i-plus">新建项目</Button>} />
```

## 来源

新增。无，源站没有对应控件。
