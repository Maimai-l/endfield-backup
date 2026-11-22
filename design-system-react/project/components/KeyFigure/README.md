# KeyFigure

主读数：一屏所回答问题的答案，写成一个大数字。

## 何时使用

一屏的主体是一个数时：通畅线路数、生效中的授权数、待处理数。先写出这一屏回答哪个问题，答案是一个数才用它；答案是一张图或一张表时，主体是那张图或表。一个对象的多项小读数用 Readout，卡片里的单项指标用 Card 的读数卡片。

## 使用方提供

`en` 英文标签、`label` 中文名称、`value` 数字；有总数时传 `total`。

## 规则

- 一屏至多一个，工作页与内容页都可以用。
- 只排纯数字；单位与说明写在中文名称里，不跟在数字后面。
- 它是这一屏最大的元素，其余文字不超过 28px。
- 放在页面左上的内容区起点，与它回答的那张图或表并排；不居中，不放进卡片。
- 整页的动作（检测、刷新）放在它的正下方，相隔 `space-6`。

## 规格

- **尺寸**：英文标签 12px Gilroy，大写，字距 0.12em；中文名称 16px Medium，与英文相隔 4；数字 168px Novecento Medium，行高 1，与名称相隔 24，左缘外移 4 以对齐文字边；总数 56px，`color-text-tertiary`，与数字相隔 8，按基线对齐
- **Token**：`--text-num-key --font-numeric --font-en --font-medium --color-text-primary --color-text-secondary --color-text-tertiary`

## 结构

```jsx
const { KeyFigure } = window.Endfield;

<KeyFigure en="Routes Online" label="通畅线路" value="3" total="4" />
```

## 来源

新增。大号读数取自源站与游戏系统界面的数字排法。
