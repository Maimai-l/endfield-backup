# Link

行内文字链接与独立的“查看全部”链接，始终带下划线。

## 何时使用

跳转到另一页面或外部地址。触发动作用按钮。

## 使用方提供

链接文字与 `href`；独立链接加 `link--go` 与箭头图标。

## 规则

- 链接颜色用 `color-text-link`，不用品牌黄作浅色面上的文字。
- 访问过与未访问的链接不区分颜色。

## 规格

- **尺寸**：继承上下文字号；下划线 1px，偏移 3px；悬停时下划线加粗为 2px，不加底色
- **Token**：`--color-text-link --color-text-secondary --color-text-disabled --color-focus-ring`
- **键盘**：`Enter` 打开

## 结构

```html
<p class="prose">
  官网改版已进入第三周，进度落后计划两天。请查看
  <a class="link" href="#c-link">进度记录</a>
  并在本周内调整排期。
</p>
```

## 来源

新增。无，源站没有对应控件。
