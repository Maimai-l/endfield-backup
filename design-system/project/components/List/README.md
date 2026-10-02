# List

列表与入口菜单。

## 何时使用

入口菜单用于少量并列的栏目入口；列表用于同类条目的纵向排列，分双行、单行、紧凑三种。

## 使用方提供

入口菜单 `[data-smenu]` 的 `.smenu` 与 `.smi`，每项含图标圆 `.smi-ic`（栏目图标加箭头 `.smi-go`）与文字 `.smi-tx`；列表 `[data-list]` 的 `.list` 与 `.li` 行（`li--2` 双行、`li--c` 紧凑）。

## 规则

- 同一时刻只有一项高亮：入口菜单中悬停项高亮时，当前项退回常态。
- 高亮为 `color-checked` 实底胶囊，文字与图标圆转为 `color-on-checked`，浅色为墨底黄字，深色为黄底墨字；不用渐变。
- 入口菜单高亮时，图标换为右向箭头，文字由居中移到右侧。
- 条目之间不加分隔线，靠间距分开；列表外不加边框容器。

## 规格

- **尺寸**：入口菜单宽 360，条目高 48，图标圆 36，间距 24，文字 15 Bold 居中；列表双行高 56、图标圆 40，单行高 40，紧凑高 32，间距 8；条目为全圆角胶囊，1.5px `color-border-subtle` 描边，悬停描边转为 `color-text-secondary`
- **Token**：`--color-checked --color-on-checked --color-border-subtle --color-text-primary --color-text-secondary --color-bg-page --radius-full --space-5 --space-2`
- **键盘**：入口菜单为链接，`Tab` 依次到达，聚焦项按高亮显示；列表 `上方向键``下方向键` 在行之间移动，`Enter` 或 `Space` 选中

## 结构

```html
<ul class="smenu" data-smenu aria-label="栏目">
  <li><a class="smi" href="#" aria-current="true">
    <span class="smi-ic"><svg class="ic"><use href="#n-lore"></use></svg><svg class="ic smi-go"><use href="#i-arrow-r"></use></svg></span>
    <span class="smi-tx">资料档案</span>
  </a></li>
</ul>

<ul class="list" role="listbox" aria-label="文件" data-list>
  <li class="li li--2" role="option" aria-selected="false" tabindex="0">
    <span class="lead"><svg class="ic"><use href="#i-doc"></use></svg></span>
    <span class="main"><b>季度报告</b><span>9 月 30 日更新</span></span>
    <span class="trail">2.4 MB</span>
  </li>
</ul>
```

## 来源

新增。版式参照官网菜单面板：胶囊形条目、左侧圆形图标、居中文字、同一时刻只有一项高亮。
