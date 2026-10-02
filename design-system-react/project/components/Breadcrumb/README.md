# Breadcrumb

面包屑与路径，显示当前页面的位置。

## 何时使用

层级两级以上的页面，放在顶栏标题上方。

## 使用方提供

`items`（`{ label, href? }`，最后一项为当前页）；`maxItems` 超过时折叠中间层级（默认 4）。页面左上角的当前位置用 `Path`（`items`）。

## 规则

- 分隔符为 CSS 绘制的斜线，不用字符。
- 超过 4 级时折叠中间层级。

## 规格

- **尺寸**：高 24，字号 13，分隔符为 CSS 绘制的 1px 斜线，高 11，左右间距 9；路径前缀为两道同样绘制的斜线；当前项不可点击，Medium 字重
- **Token**：`--color-text-secondary --color-text-primary --color-text-tertiary`
- **键盘**：`Tab` 在链接之间移动，`Enter` 打开

## 结构

```jsx
const { Breadcrumb } = window.Endfield;

<Breadcrumb items={[{ label: '项目管理', href: '/' }, { label: '产品部', href: '/p' }, { label: '官网改版' }]} />
```

## 来源

新增。无，源站没有对应控件。
