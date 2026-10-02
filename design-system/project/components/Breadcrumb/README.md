# Breadcrumb

面包屑与路径，显示当前页面的位置。

## 何时使用

层级两级以上的页面，放在顶栏标题上方。

## 使用方提供

`<nav aria-label="面包屑"><ol class="crumbs">`，最后一项 `aria-current="page"` 不可点击。

## 规则

- 分隔符为 CSS 绘制的斜线，不用字符。
- 超过 4 级时折叠中间层级。

## 规格

- **尺寸**：高 24，字号 13，分隔符为 CSS 绘制的 1px 斜线，高 11，左右间距 9；路径前缀为两道同样绘制的斜线；当前项不可点击，Medium 字重
- **Token**：`--color-text-secondary --color-text-primary --color-text-tertiary`
- **键盘**：`Tab` 在链接之间移动，`Enter` 打开

## 结构

```html
<nav aria-label="面包屑">
  <ol class="crumbs">
    <li>
      <a href="#c-crumbs">项目管理</a>
    </li>
    <li>
      <a href="#c-crumbs">产品部</a>
    </li>
    <li>
      <a href="#c-crumbs">官网</a>
    </li>
    <li>
      <span aria-current="page">官网改版</span>
    </li>
  </ol>
</nav>
```

## 来源

新增。无，源站没有对应控件。
