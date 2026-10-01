# Select

下拉选择，含单选、可搜索、多选三种。

## 何时使用

从 5 个以上的选项中选一个或多个；2 至 4 个选项用单选框或分段控件。

## 使用方提供

`options`（`{ value, label, meta?, disabled? }`，分组为 `{ group, options }`）；`value` 或 `defaultValue` 与 `onChange`；`label`、`help`、`error`、`placeholder`、`disabled`、`size`；`searchable` 菜单内搜索；`loading` 传加载中的文字。常驻展开的选择面板传 `inline` 与 `defaultOpen`。多选用 `MultiSelect`：`options`、`value` 或 `defaultValue`（数组）与 `onChange`、`maxTags`。

## 规则

- 选中项用勾选图标标记，不改变文字颜色。
- 菜单最大高度 280，超出滚动。
- 不可选的项设 `disabled: true`，并用 `meta` 说明原因。

## 规格

- **尺寸**：触发器同文本框三档，全圆角胶囊，多选时圆角 16；菜单圆角 16、内边距 6；菜单项高 32，全圆角；菜单最大高 320；菜单宽度不小于触发器，间距 4；分组标题 11px Gilroy 大写
- **Token**：`--color-bg-raised --shadow-lg --radius-full --radius-lg --color-bg-selected --color-state-hover`
- **键盘**：`Enter` 或 `Space` 展开，`上方向键``下方向键` 移动，`Enter` 选择，`Esc` 关闭并返回触发器

## 结构

```jsx
const { Select } = window.Endfield;

<Select label="所属部门" defaultValue="p" options={[
  { group: 'Product', options: [{ value: 'p', label: '产品部' }, { value: 'o', label: '运营部' }] },
]} onChange={setDept} />
```

## 来源

源站改造。DropdownTrigger（触发器与三角图标）
