# MetricBadge

指标徽章：名称、大号数值与说明按钮。

## 何时使用

离散档位或短编号：服务等级、告警级别、版本号、班次。

## 使用方提供

`label`、`value`（1 至 3 个字符）、`infoLabel`（说明按钮的无障碍名称）与 `onInfo`。

## 规则

- 数值不超过 3 个字符。
- 左侧竖条使用 `color-checked`。

## 规格

- **用途**：任何离散档位或短编号：服务等级、告警级别、版本号、班次、优先级；右侧按钮打开档位说明
- **尺寸**：高 44、全圆角；表面色平涂与 1px 分隔线色外框；左侧 3px 竖条使用勾选色（浅色为墨色，深色为品牌黄）；名称 14 Medium 次要文字色，数值 22 Novecento（笔画高约为名称的 1.3 倍，不超过胶囊高度的 40%），上移 0.08em 使笔画中心与名称、说明按钮落在同一中线；说明按钮 30 圆形，1.5px 正文色描边，悬停反色
- **Token**：`--color-bg-surface --color-border-subtle --color-checked --color-text-primary --color-text-secondary --font-numeric`
- **键盘**：说明按钮可用 `Tab` 到达，`Enter` 打开说明

## 结构

```jsx
const { MetricBadge } = window.Endfield;

<MetricBadge label="评审等级" value="02" infoLabel="评审等级说明" onInfo={explain} />
```

## 来源

档位读数。游戏主菜单系统界面
