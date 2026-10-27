# StatusCard

状态卡：一个受控对象的编号、名称、状态与读数，底部为全宽动作按钮。外框与 Card 相同。

## 何时使用

- 工作页中并列或有先后关系的受控对象：服务、进程、设备、连接、检查项。
- 只展示信息、没有动作的条目用 Card。

## 使用方提供

`index`（有先后关系时的序号）、`code` 英文标识、`name`、`state` 状态词、`tone`（off、err）、`readout`（同 Readout 的 `items`）、`action` 下一步动作的文字与 `onAction`、`loading`。有先后关系时用 `Chain` 包住各卡，`links` 为相邻两项是否接通的数组。

## 规则

- 状态词与动作词取自 README 的术语；按钮写下一步动作，随状态变化。
- 状态只用文字表示：工作中为正文色，不工作加 `is-off` 为次要文字色，出错加 `is-err` 为错误色。不加图标、圆点与色条。
- 并列的状态卡等宽等高，字段相同、顺序相同。
- 有先后关系的对象按顺序编号（01、02），连线表示相邻两项之间是否接通；没有先后关系的对象不编号，不画连线。
- 一组状态卡只用一种按钮：sm 档的全宽主要按钮。

## 规格

- **尺寸**：内边距 16，圆角 4，1px `color-border-subtle` 边框，`color-bg-surface` 底；顶行高 16，编号 12px `font-numeric` 居左，英文标识 11px `font-en` 大写、字距 0.12em 居右，均为 `color-text-tertiary`；名称 14px `font-medium`，行高 20，上距 12，`color-text-secondary`；状态 24px `font-bold`，行高 32，上距 4；读数上方 1px 分隔线，上下各留 16；按钮贴底
- **连线**：卡与卡相距 16，连线宽 16、高 2，竖直位置与状态文字的中线重合；接通为 `color-checked` 实线，断开为 `color-border-control` 虚线（实 4、空 2）；宽度不足 640 时纵向排列，连线变为竖线
- **Token**：`--color-bg-surface --color-border-subtle --color-border-control --color-checked --color-text-primary --color-text-secondary --color-text-tertiary --color-error --radius-md --font-numeric --font-en --font-medium --font-bold`

## 结构

```jsx
const { Chain, StatusCard } = window.Endfield;

<Chain links={[false]}>
  <StatusCard index="01" code="Gateway" name="网关" state="运行中" action="停止" onAction={stop}
    readout={[{ label: '端口', value: '8400', kind: 'num' }]} />
  <StatusCard index="02" code="Render" name="渲染服务" state="已停止" tone="off" action="启动" onAction={start}
    readout={[{ label: '端口', value: '9876', kind: 'num' }]} />
</Chain>
```

## 来源

新增。外框沿用 Card，读数用 Readout，按钮用 Button 的全宽尺寸。
