# Banner

页面内提示条，常驻在相关内容上方，可关闭。

## 何时使用

需要用户注意但不阻断操作的信息：配置即将过期、部分数据未同步。

## 使用方提供

类型类 `alert--info|success|warning|error`、标题、正文、可选操作链接与关闭按钮。

## 规则

- 左侧 4px 色条使用对应功能色；警告用黄黑条纹。
- 不要整页叠放多条提示条，合并为一条。

## 规格

- **尺寸**：宽度随容器；面板底色，1px 边框；左侧 4px 纯色色条（警告为黄黑条纹）；图标 16；标题 14 Medium，正文 13
- **Token**：`--color-bg-surface --color-border-subtle --color-success --color-error --hazard --color-info --radius-sm`
- **键盘**：关闭按钮可用 `Tab` 到达；错误类使用 `role="alert"`，其余使用 `role="status"`

## 结构

```html
<div class="alert alert--warning" role="status">
  <svg class="ic"><use href="#s-warning"></use></svg>
  <div class="alert-title">A-02 负载连续 30 分钟高于 85%</div>
  <div class="alert-body">
    建议降低进料速度。
    <a class="link" href="#c-alert">查看负载曲线</a>
  </div>
</div>
```

## 来源

新增。无，源站没有对应控件。
