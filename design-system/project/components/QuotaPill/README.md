# QuotaPill

额度胶囊：当前值、上限与补充操作。

## 何时使用

任何“当前值、上限与补充”的组合：存储空间、席位、调用配额、预算余额、库存。

## 使用方提供

`.rpill` 内的图标、`.v` 数值（上限放在 `small`）、`.u` 单位与 `.rplus` 补充按钮（带 `aria-label`）。

## 规则

- 达到上限时外框改为 `color-border-strong`。
- 没有上限时省略上限部分。

## 规格

- **用途**：任何“当前值、上限与补充操作”的组合：存储空间、席位、接口调用配额、预算余额、库存。达到上限时外框改为强边框色；没有上限时省略上限部分
- **尺寸**：高 40、全圆角；表面色平涂与 1px 分隔线色外框；图标 22 位于左端；数值 19 Novecento，上限与单位 12 次要文字色；1px 分隔；右侧 30 圆形补充按钮为正文色填充，悬停变为品牌黄、加号转 90 度
- **Token**：`--color-bg-surface --color-border-subtle --color-border-strong --color-text-primary --color-text-secondary --y-300 --font-numeric`
- **键盘**：加号按钮可用 `Tab` 到达，`Enter` 打开补充流程

## 结构

```html
<div class="rpill">
  <svg class="ic" aria-hidden="true"><use href="#i-box"></use></svg>
  <span class="v">
    820
    <small>/1000</small>
    <small class="u">GB</small>
  </span>
  <span class="sep"></span>
  <button class="rplus" type="button" aria-label="扩容存储">
    <svg class="ic"><use href="#i-plus"></use></svg>
  </button>
</div>
```

## 来源

额度读数。游戏主菜单系统界面的资源读数
