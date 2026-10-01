# Select

下拉选择，含单选、可搜索、多选三种。

## 何时使用

从 5 个以上的选项中选一个或多个；2 至 4 个选项用单选框或分段控件。

## 使用方提供

`[data-dd]` 容器、`.select` 触发器（`aria-expanded`）、`.menu` 列表（`role=listbox`）、选项 `.menu-item`（`aria-selected`）。

## 规则

- 选中项用勾选图标标记，不改变文字颜色。
- 菜单最大高度 280，超出滚动。
- 不可选的项加 `is-disabled` 与 `aria-disabled` 并说明原因。

## 规格

- **尺寸**：触发器同文本框三档；菜单项高 32；菜单最大高 320；菜单宽度不小于触发器，间距 4；分组标题 11px Gilroy 大写
- **Token**：`--color-bg-raised --shadow-lg --radius-md --color-bg-selected --color-state-hover`
- **键盘**：`Enter` 或 `Space` 展开，`上方向键``下方向键` 移动，`Enter` 选择，`Esc` 关闭并返回触发器

## 结构

```html
<div class="field">
  <span class="field-label" id="dl1">所属区域</span>
  <div class="dd">
    <button class="input select" type="button" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="dl1">
      <span class="val">北区装配线</span>
      <svg class="ic tri"><use href="#i-tri-d"></use></svg>
    </button>
    <div class="menu" role="listbox" hidden="">
      <div class="menu-group">North</div>
      <button class="menu-item" type="button" role="option" aria-selected="true">
        北区装配线
        <svg class="ic ok"><use href="#i-check"></use></svg>
      </button>
      <button class="menu-item" type="button" role="option" aria-selected="false">
        北区仓储
        <svg class="ic ok"><use href="#i-check"></use></svg>
      </button>
      <div class="menu-group">South</div>
      <button class="menu-item" type="button" role="option" aria-selected="false">
        南区冶炼
        <svg class="ic ok"><use href="#i-check"></use></svg>
      </button>
      <button class="menu-item is-disabled" type="button" role="option" aria-selected="false" aria-disabled="true">
        南区封存中
        <span class="meta">不可选</span>
      </button>
    </div>
  </div>
  <div class="field-help">点击展开，可用键盘 Tab 切换选项</div>
</div>
```

## 来源

源站改造。DropdownTrigger（触发器与三角图标）
