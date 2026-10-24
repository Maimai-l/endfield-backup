# Avatar

头像，含图片、占位、状态点与堆叠。

## 何时使用

表示人员或账户。只显示图片；没有图片时显示占位图标，不用姓名文字代替。

## 使用方提供

图片传 `src` 与 `alt`（姓名）；没有图片时显示 `icon`（默认 i-user）；`size` 直径、`status`（online、off）；可点击时传 `onClick` 与 `label`。堆叠用 `AvatarStack`（`more` 为其余人数）。

## 规则

- 尺寸 24、32、40、64。账户入口用 32。
- 外圈为 2px 浅灰 `color-avatar-ring`，两种主题同值；可点击头像悬停时外圈变为 2px 品牌黄。
- 示例头像用 Avatars 资源组中的角色头像，账户用管理员。
- 堆叠超过 3 个时用“更多”图标收起，并提供读屏文字。

## 规格

- **尺寸**：24、32、40、64，圆形；图片铺满并居中裁切；外圈 2px；阴影 `shadow-sm`；占位图标为直径的 50%；状态点为 10px 圆点，1px 墨色描边，外围 2px 页面底色；堆叠时后一个压住前一个 8px
- **Token**：`--color-avatar-ring --color-accent --color-bg-muted --color-text-secondary --shadow-sm --color-success --color-mark-stroke --color-bg-page`
- **键盘**：可点击头像 `Enter` 打开账户菜单

## 结构

```jsx
const { Avatar, AvatarStack } = window.Endfield;

<Avatar size={32} src={url} alt="管理员" />
<Avatar src={url} alt="陈千语" status="online" />
<AvatarStack more={4}><Avatar size={32} src={a} alt="佩丽卡" /><Avatar size={32} src={b} alt="陈千语" /></AvatarStack>
```

## 来源

源站改造。干员切换栏头像：圆形图片、3px 浅灰外圈、悬停与选中时外圈变为 2px 黄色。
