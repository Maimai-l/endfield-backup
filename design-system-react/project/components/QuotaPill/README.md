# QuotaPill

额度胶囊：当前值、上限与补充操作。

## 何时使用

任何“当前值、上限与补充”的组合：存储空间、席位、调用配额、预算余额、库存。

## 使用方提供

`icon`、`value` 用量、`max` 上限、`unit`、`actionLabel`（加号按钮的无障碍名称）与 `onAction`。用量达到上限时自动显示为已满。

## 规则

- 达到上限时外框改为 `color-border-strong`。
- 没有上限时省略上限部分。

## 规格

- **用途**：任何“当前值、上限与补充操作”的组合：存储空间、席位、接口调用配额、预算余额、库存。达到上限时外框改为强边框色；没有上限时省略上限部分
- **尺寸**：高 40、全圆角；表面色平涂与 1px 分隔线色外框；图标 22 位于左端；数值 19 Novecento，上限与单位 12 次要文字色；1px 分隔；右侧 30 圆形补充按钮为正文色填充，悬停变为品牌黄、加号转 90 度
- **Token**：`--color-bg-surface --color-border-subtle --color-border-strong --color-text-primary --color-text-secondary --y-300 --font-numeric`
- **键盘**：加号按钮可用 `Tab` 到达，`Enter` 打开补充流程

## 结构

```jsx
const { QuotaPill } = window.Endfield;

<QuotaPill icon="i-box" value={820} max={1000} unit="GB" actionLabel="扩容存储" onAction={expand} />
```

## 来源

额度读数。游戏主菜单系统界面的资源读数
