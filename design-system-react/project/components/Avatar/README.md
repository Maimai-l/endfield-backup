# Avatar

头像，含图片、文字、占位、状态点与堆叠。

## 何时使用

表示人员或账户。

## 使用方提供

文字头像传一个字作为 `children`；图片传 `src` 与 `alt`；都没有时显示 `icon`（默认 i-user）；`size` 直径、`status`（online、off）；可点击时传 `onClick` 与 `label`。堆叠用 `AvatarStack`（`more` 为其余人数）。

## 规则

- 尺寸 24、32、40、64。
- 堆叠超过 3 个时用“更多”图标收起，并提供读屏文字。

## 规格

- **尺寸**：24、32、40、64，圆形；文字为直径的 40%；状态点为 10px 圆点，1px 墨色描边，外围 2px 页面底色
- **Token**：`--radius-full --color-bg-muted --color-text-secondary --color-success --color-bg-page`
- **键盘**：可点击头像 `Enter` 打开账户菜单

## 结构

```jsx
const { Avatar, AvatarStack } = window.Endfield;

<Avatar>周</Avatar>
<Avatar src={url} alt="成员 302" status="online" />
<AvatarStack more={4}><Avatar size={32}>周</Avatar><Avatar size={32}>林</Avatar></AvatarStack>
```

## 来源

源站改造。AvatarChip
