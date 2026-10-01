# Banner

页面内提示条，常驻在相关内容上方，可关闭。

## 何时使用

需要用户注意但不阻断操作的信息：配置即将过期、部分数据未同步。

## 使用方提供

`type`（info、success、warning、error）、`title`、说明 `children`（可含链接）；可关闭时传 `onClose`。

## 规则

- 左侧 4px 色条使用对应功能色。
- 不要整页叠放多条提示条，合并为一条。

## 规格

- **尺寸**：宽度随容器；面板底色，1px 边框；左侧 4px 纯色色条；图标 16；标题 14 Medium，正文 13
- **Token**：`--color-bg-surface --color-border-subtle --color-success --color-error --color-warning --color-info --radius-sm`
- **键盘**：关闭按钮可用 `Tab` 到达；错误类使用 `role="alert"`，其余使用 `role="status"`

## 结构

```jsx
const { Banner, Link } = window.Endfield;

<Banner type="warning" title="存储用量已超过 85%">建议清理过期文件。<Link href="/usage">查看用量</Link></Banner>
```

## 来源

新增。无，源站没有对应控件。
