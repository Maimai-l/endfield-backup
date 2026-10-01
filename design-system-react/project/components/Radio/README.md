# Radio

单选框，同组只能选一项。

## 何时使用

从 2 至 4 个互斥选项中选一个，选项需要同时可见。

## 使用方提供

文字 `children`、同组相同的 `name`；`checked` 或 `defaultChecked`；`error`、`disabled`、`size`。成组时放在 `OptionGroup` 内。

## 规则

- 选中为墨色填充，中心圆点为黄色（深色模式反转）。
- 默认选中最常用的一项。

## 规格

- **尺寸**：圆形 16、20；选中为墨色填充，中心 6、8 圆点为黄色（深色模式反转）
- **Token**：`--color-border-control --color-checked --color-on-checked`
- **键盘**：`Tab` 进入组内已选项，`上方向键``下方向键``左方向键``右方向键` 在组内切换并选中

## 结构

```jsx
const { OptionGroup, Radio } = window.Endfield;

<OptionGroup legend="评审频率">
  <Radio name="freq" defaultChecked>每日一次</Radio>
  <Radio name="freq">每周一次</Radio>
</OptionGroup>
```

## 来源

新增。无，源站没有对应控件。
