# Design System 规范（功能性 Web App）

Sep 30, 2026 · @MM

可视化展示见仓库根目录 `showcase.html`。本规范以现有 token（`tokens/colors.css`、`tokens/motifs.css`）和源站控件 CSS（`css/controls.css`）为取值来源，按功能性 Web App 的需要重新组织。源站没有的部分（表单控件、表格、功能色、深色模式语义层）在此补齐。所有对比度数值按 WCAG 2.x 相对亮度公式计算。

**三条全局规则**

1. 品牌黄 `#fffa00` 只作为填充色使用，其上文字一律为墨色 `#191919`。黄色在白底上的对比度只有 1.11:1，浅色模式下不得用作文字、图标、边框或焦点环；需要黄色语义的文字使用 `Y-900 #6b6500`。
2. 浅色模式下，"选中/勾选"类强状态使用墨色填充配黄色标记（墨底黄勾、墨色轨道黄色滑块）；深色模式下反转为黄色填充配墨色标记。两者共用 `--color-checked` / `--color-on-checked`。
3. 45° 警示条纹只承担两种功能含义：危险操作（危险确认对话框标题栏）和不确定进度（进度条动画）。不作为普通装饰使用。

## 颜色

### 品牌主色色阶

| 等级 | 色值 | 用途 |
| --- | --- | --- |
| Y-50 | `#fffcc2` | 浅色模式选中行、选中菜单项背景；链接悬停底色 |
| Y-300 | `#fffa00` | 品牌主色；强调按钮底色；深色模式下的勾选控件、标签页指示条、焦点环 |
| Y-400 | `#efe701` | 强调按钮悬停 |
| Y-500 | `#e6de01` | 强调按钮按下 |
| Y-900 | `#6b6500` | 浅色模式下需要黄色语义的文字与图标（对白底 6.02:1） |
| Y-D | `#2f2f12` | 深色模式选中行、选中菜单项背景（Y-300 以 12% 叠加于 `#131315`） |

### 中性色色阶

浅色模式使用 N 系列，深色模式使用 D 系列（源站 dark scene 取值）。

| 等级 | 色值 | 用途 |
| --- | --- | --- |
| N-0 | `#ffffff` | 浅色页面底色；输入框底色；浮层底色 |
| N-25 | `#fafafa` | 卡片、面板、侧栏、表头底色；填充型输入框底色 |
| N-50 | `#f2f2f2` | 禁用控件底色 |
| N-100 | `#e6e6e6` | 进度条轨道；骨架屏；文字头像底色；中性标签底色 |
| N-200 | `#d9d9d9` | 分隔线；卡片与面板边框 |
| N-300 | `#b3b3b3` | 禁用文字与图标 |
| N-400 | `#858585` | 输入框、复选框、单选框边框（对白底 3.69:1，满足非文本 3:1） |
| N-500 | `#707070` | 占位文字；三级文字（仅用于 N-0 / N-25 底） |
| N-600 | `#595959` | 次要文字 |
| N-700 | `#484848` | 主要按钮悬停 |
| N-800 | `#383838` | 主要按钮底色（源站 Button 默认色） |
| N-850 | `#282828` | 主要按钮按下 |
| N-900 | `#191919` | 墨色：主要文字；焦点环；勾选控件底色；强调面（提示、轻提示、当前导航项） |
| D-900 | `#131315` | 深色页面底色 |
| D-800 | `#1f1f22` | 深色卡片、面板、侧栏底色；禁用控件底色 |
| D-700 | `#26272b` | 深色浮层底色（对话框、菜单、下拉面板） |
| D-600 | `#35373c` | 深色分隔线与边框；进度条轨道；强调面（提示、轻提示、当前导航项） |
| D-500 | `#5c5e64` | 深色禁用文字与图标 |
| D-400 | `#74767c` | 深色输入框、复选框边框（对 D-700 3.29:1） |
| D-300 | `#939499` | 深色占位文字、三级文字（对 D-700 4.93:1） |
| D-200 | `#b3b3b3` | 深色次要文字 |
| D-100 | `#ededed` | 深色主要文字；深色模式主要按钮底色 |

### 功能色

浅色模式：

| 类型 | 文字与图标 | 边框 | 背景 |
| --- | --- | --- | --- |
| 成功 | `#0a7a4f` | `#8fdcbd` | `#e8fbf3` |
| 警告 | `#a64f00` | `#ffc27a` | `#fff4e5` |
| 错误 | `#c8102e` | `#f2a6b2` | `#fdecef` |
| 信息 | `#1a5fd6` | `#a3c1f5` | `#ebf2fe` |

深色模式：

| 类型 | 文字与图标 | 边框 | 背景 |
| --- | --- | --- | --- |
| 成功 | `#00e691` | `#0f5a3f` | `#0c2a20` |
| 警告 | `#ffa53d` | `#6b3f0a` | `#2b1c09` |
| 错误 | `#ff6b81` | `#6e1f2c` | `#2d1116` |
| 信息 | `#6ea8ff` | `#1f3f73` | `#0f1d33` |

说明：警告色使用橙色而非黄色，避免与品牌黄混淆。成功色由源站装饰色 `#00ffa2` 同色相加深得到；源站粉色 `#ff1aac` 仍只用于色条装饰，不作为功能色。轻提示和悬浮说明的底色在两种模式下都是深色（`--color-bg-emphasis`），其功能色条统一使用深色模式的"文字与图标"值。

### 语义 token

| Token | 浅色模式 | 深色模式 | 用途 |
| --- | --- | --- | --- |
| `--color-bg-page` | `#ffffff` | `#131315` | 页面底色；输入框底色 |
| `--color-bg-surface` | `#fafafa` | `#1f1f22` | 卡片、面板、侧栏、表头 |
| `--color-bg-raised` | `#ffffff` | `#26272b` | 对话框、下拉菜单、弹出面板（配合 `--shadow-lg`） |
| `--color-bg-muted` | `#e6e6e6` | `#35373c` | 进度条轨道、骨架屏、文字头像、中性标签 |
| `--color-bg-selected` | `#fffcc2` | `#2f2f12` | 选中的列表行、表格行、菜单项 |
| `--color-bg-disabled` | `#f2f2f2` | `#1f1f22` | 禁用控件底色 |
| `--color-bg-emphasis` | `#191919` | `#35373c` | 轻提示、悬浮说明、当前导航项 |
| `--color-bg-overlay` | `rgba(0,0,0,.5)` | `rgba(0,0,0,.7)` | 对话框遮罩 |
| `--color-state-hover` | `rgba(0,0,0,.05)` | `rgba(255,255,255,.06)` | 悬停叠加层，适用于任意底色 |
| `--color-state-pressed` | `rgba(0,0,0,.10)` | `rgba(255,255,255,.12)` | 按下叠加层 |
| `--color-text-primary` | `#191919` | `#ededed` | 正文、标题、输入值 |
| `--color-text-secondary` | `#595959` | `#b3b3b3` | 说明文字、表头、未选中标签页 |
| `--color-text-tertiary` | `#707070` | `#939499` | 占位文字、时间戳、面包屑分隔符 |
| `--color-text-disabled` | `#b3b3b3` | `#5c5e64` | 禁用文字与图标 |
| `--color-text-on-emphasis` | `#ffffff` | `#ededed` | `--color-bg-emphasis` 上的文字 |
| `--color-text-on-accent` | `#191919` | `#191919` | 品牌黄底上的文字与图标 |
| `--color-text-link` | `#191919`（带下划线） | `#fffa00`（带下划线） | 链接 |
| `--color-border-subtle` | `#d9d9d9` | `#35373c` | 分隔线、卡片边框、表格线 |
| `--color-border-control` | `#858585` | `#74767c` | 输入框、复选框、单选框、次要按钮边框 |
| `--color-border-strong` | `#191919` | `#ededed` | 输入框悬停与聚焦边框、可交互卡片悬停边框 |
| `--color-focus-ring` | `#191919` | `#fffa00` | 键盘焦点环 |
| `--color-accent` | `#fffa00` | `#fffa00` | 强调按钮底色、强调标签底色 |
| `--color-accent-hover` | `#efe701` | `#efe701` | 强调按钮悬停 |
| `--color-accent-active` | `#e6de01` | `#e6de01` | 强调按钮按下 |
| `--color-accent-fg` | `#6b6500` | `#fffa00` | 以文字或图标形式出现的黄色语义 |
| `--color-primary` | `#383838` | `#ededed` | 主要按钮底色 |
| `--color-primary-hover` | `#484848` | `#ffffff` | 主要按钮悬停 |
| `--color-primary-active` | `#282828` | `#d9d9d9` | 主要按钮按下 |
| `--color-on-primary` | `#ffffff` | `#131315` | 主要按钮文字 |
| `--color-primary-tick` | `#fffa00` | `#191919` | 主要按钮左侧竖条 |
| `--color-tick-muted` | `#858585` | `#74767c` | 次要按钮左侧竖条 |
| `--color-danger` / `-hover` / `-active` | `#c8102e` / `#a80d26` / `#8f0b20` | `#ff6b81` / `#ff8597` / `#f2566e` | 危险按钮底色 |
| `--color-on-danger` | `#ffffff` | `#131315` | 危险按钮文字 |
| `--color-checked` | `#191919` | `#fffa00` | 复选框与单选框选中底色、开关开启轨道、标签页指示条、进度条填充、当前页码底色、选中行左侧竖条 |
| `--color-on-checked` | `#fffa00` | `#191919` | 勾选标记、开关滑块、当前页码数字 |
| `--color-{success,warning,error,info}-fg` / `-border` / `-bg` | 见功能色表 | 见功能色表 | 功能色 |

### 对比度

| 前景 | 背景 | 对比度 | 是否达标 |
| --- | --- | --- | --- |
| 主要文字 `#191919` | 页面 `#ffffff` | 17.58:1 | AAA |
| 主要文字 `#191919` | 面板 `#fafafa` | 16.84:1 | AAA |
| 次要文字 `#595959` | 页面 `#ffffff` | 7.00:1 | AAA |
| 次要文字 `#595959` | 禁用底 `#f2f2f2` | 6.26:1 | AA |
| 三级文字 `#707070` | 面板 `#fafafa` | 4.74:1 | AA（不得用于 `#f2f2f2` 及更深底色，该组合为 4.42:1） |
| 黄色文字 `#6b6500` | 页面 `#ffffff` | 6.02:1 | AA |
| 墨色 `#191919` | 品牌黄 `#fffa00` | 15.85:1 | AAA |
| 品牌黄 `#fffa00` | 页面 `#ffffff` | 1.11:1 | 不达标（因此禁止黄色文字、黄色边框、黄色焦点环出现在浅色底上） |
| 白色 `#ffffff` | 主要按钮 `#383838` | 11.73:1 | AAA |
| 白色 `#ffffff` | 错误色 `#c8102e`（危险按钮） | 5.88:1 | AA |
| 控件边框 `#858585` | 面板 `#fafafa` | 3.54:1 | 达标（非文本 3:1） |
| 成功 `#0a7a4f` | 成功背景 `#e8fbf3` | 4.99:1 | AA |
| 警告 `#a64f00` | 警告背景 `#fff4e5` | 5.17:1 | AA |
| 错误 `#c8102e` | 错误背景 `#fdecef` | 5.16:1 | AA |
| 信息 `#1a5fd6` | 信息背景 `#ebf2fe` | 5.11:1 | AA |
| 深色主要文字 `#ededed` | 深色页面 `#131315` | 15.85:1 | AAA |
| 深色次要文字 `#b3b3b3` | 深色浮层 `#26272b` | 7.12:1 | AAA |
| 深色三级文字 `#939499` | 深色浮层 `#26272b` | 4.93:1 | AA |
| 深色控件边框 `#74767c` | 深色浮层 `#26272b` | 3.29:1 | 达标（非文本 3:1） |
| 品牌黄 `#fffa00` | 深色页面 `#131315` | 16.72:1 | AAA（深色模式焦点环、链接可用） |
| 深色错误 `#ff6b81` | 强调面 `#35373c` | 4.35:1 | 达标（仅作为轻提示色条与图标，非文本 3:1） |
| 深色信息 `#6ea8ff` | 深色信息背景 `#0f1d33` | 7.00:1 | AAA |

## 交互状态

| 状态 | 触发条件 | 视觉变化 | 适用控件 |
| --- | --- | --- | --- |
| 默认 | 无交互 | 使用控件基础 token | 全部控件 |
| 悬停 | 指针位于控件上方；仅在 `@media (hover: hover)` 下生效 | 底色叠加 `--color-state-hover`；按钮圆角 2px → 6px，主要按钮左侧黄色竖条变为箭头（源站行为），过渡 200ms；输入框边框变为 `--color-border-strong`；链接底色变为 Y-50 / Y-D | 按钮、图标按钮、链接、输入框、下拉选择、列表行、表格行、标签页、导航项、分页器、可交互卡片 |
| 按下 | 指针按下，或键盘空格 / 回车按住 | 底色叠加 `--color-state-pressed`；主要与强调按钮切换为 `-active` 色值；无位移、无缩放 | 按钮、图标按钮、列表行、标签页、导航项、分页器 |
| 焦点 | 键盘导航获得焦点（`:focus-visible`） | 2px `--color-focus-ring` 外描边，偏移 2px，圆角跟随控件；输入类控件在 `:focus` 时边框变为 `--color-border-strong` 并增加 1px 同色内描边 | 全部可交互控件 |
| 选中 | `aria-selected`、`aria-checked`、`aria-current` 为 true | 复选框、单选框、开关：`--color-checked` 填充 + `--color-on-checked` 标记；列表与表格行：`--color-bg-selected` 底色 + 左侧 3px `--color-checked` 竖条；标签页：文字变为 `--color-text-primary` 且字重为 Medium，底部 2px `--color-checked` 指示条；导航项：`--color-bg-emphasis` 底色 + 左侧 3px 品牌黄竖条 | 复选框、单选框、开关、列表、表格、标签页、分段选择、导航项、分页器、下拉菜单项、可选卡片 |
| 禁用 | `disabled` 或 `aria-disabled="true"` | 文字与图标变为 `--color-text-disabled`；底色变为 `--color-bg-disabled`；边框变为 `--color-border-subtle`；`cursor: not-allowed`；取消悬停与按下反馈；不使用整体透明度，以保证颜色可控 | 全部可交互控件 |
| 错误 | 校验失败，`aria-invalid="true"` | 边框变为 `--color-error-fg`；控件下方显示 13px 错误说明文字与 16px 错误图标，说明文字通过 `aria-describedby` 关联；不单独依靠颜色表达 | 单行文本框、多行文本框、下拉选择、复选框组、单选框组 |
| 加载 | 异步操作进行中，`aria-busy="true"` | 按钮保持原宽度，文字替换为与字号相同尺寸的加载指示器，禁止重复触发；区块首次加载使用骨架屏；操作超过 300ms 才显示加载状态，避免闪烁 | 按钮、开关、下拉选择（远程搜索）、表格、列表、卡片 |

## 控件

尺寸档位统一为 sm / md / lg，对应控件高度 28 / 36 / 44px（md 与源站 Button 的 36px 一致）。默认使用 md。

### 基础操作

| 控件 | 变体 | 尺寸 | 状态 | 引用的 token |
| --- | --- | --- | --- | --- |
| 按钮 | 主要（深色底，左侧黄色竖条，即源站 Button）；强调（品牌黄底，每个视图最多一个）；次要（页面底色 + 控件边框）；幽灵（透明底）；危险（错误色底，白字） | 高 28 / 36 / 44；水平内边距 12 / 16 / 20；字号 13 / 14 / 16，SansMedium；图标 14 / 16 / 18，与文字间距 6；md 最小宽度 64 | 默认、悬停、按下、焦点、禁用、加载 | `--color-primary*`、`--color-on-primary`、`--color-accent*`、`--color-text-on-accent`、`--color-border-control`、`--color-state-hover`、`--color-state-pressed`、`--color-error-fg`、`--color-focus-ring`、`--radius-sm`、`--radius-hover`、`--size-control-*`、`--duration-base` |
| 图标按钮 | 与按钮相同的五种；圆形（源站 RoundButton，仅用于轮播与翻页）；切换型（`aria-pressed`） | 正方形 28 / 36 / 44；图标 16 / 18 / 20；圆形 36 / 44；无可见文字时必须提供 `aria-label` 并配悬浮说明 | 默认、悬停、按下、焦点、选中（切换型）、禁用、加载 | 同按钮；圆形另引用 `--radius-full`、`--shadow-sm` |
| 链接 | 行内（带下划线，继承正文字号）；独立（无下划线，右侧带箭头图标，用于"查看全部"类入口） | 继承上下文字号；下划线 1px，偏移 2px | 默认、悬停（下划线 2px，底色 Y-50 / Y-D）、按下、焦点、禁用 | `--color-text-link`、`--color-bg-selected`、`--color-text-disabled`、`--color-focus-ring` |

### 表单输入

| 控件 | 变体 | 尺寸 | 状态 | 引用的 token |
| --- | --- | --- | --- | --- |
| 单行文本框 | 描边（默认）；填充（N-25 / D-800 底，用于表格内与工具栏）；可附前缀图标、后缀单位、清除按钮、字数计数 | 高 28 / 36 / 44；水平内边距 8 / 12 / 12；字号 13 / 14 / 16；标签 13px 位于上方，间距 4；说明与错误文字 13px 位于下方，间距 4 | 默认、悬停、焦点、禁用、只读（无边框，底色 `--color-bg-surface`）、错误 | `--color-bg-page`、`--color-border-control`、`--color-border-strong`、`--color-text-primary`、`--color-text-tertiary`、`--color-text-secondary`、`--color-error-fg`、`--color-bg-disabled`、`--radius-sm` |
| 多行文本框 | 固定行数；自适应高度（最少 3 行，最多 10 行，超出后滚动） | 最小高 80；内边距 8 / 12；字号 14；行高 1.6；右下角字数计数 12px | 默认、悬停、焦点、禁用、只读、错误 | 同单行文本框 |
| 下拉选择 | 单选；多选（已选值以标签形式显示在触发器内）；可搜索；触发器沿用源站 DropdownTrigger 的右侧三角图标 | 触发器同单行文本框三档；菜单项高 32（md）/ 40（lg）；菜单最大高 320，超出滚动；菜单宽度不小于触发器；菜单与触发器间距 4 | 触发器：默认、悬停、焦点、展开、禁用、错误、加载；菜单项：悬停、选中（`--color-bg-selected` + 右侧对勾）、禁用 | `--color-bg-raised`、`--shadow-lg`、`--radius-sm`（触发器）、`--radius-md`（菜单）、`--color-bg-selected`、`--color-state-hover`、`--color-border-subtle`、`--color-accent-fg`（对勾） |
| 复选框 | 未选；选中；部分选中 | 方框 16（sm / md）/ 20（lg）；圆角 2；可点击区域不小于 24 × 24；与标签间距 8 | 默认、悬停、焦点、选中、禁用、错误 | `--color-border-control`、`--color-checked`、`--color-on-checked`、`--color-bg-page`、`--color-error-fg`、`--radius-sm` |
| 单选框 | 未选；选中 | 菱形，外接 18 / 22；选中时 `--color-checked` 填充，中心 5 / 6 菱形为 `--color-on-checked`；可点击区域不小于 24 × 24 | 默认、悬停、焦点、选中、禁用、错误 | `--color-border-control`、`--color-checked`、`--color-on-checked` |
| 开关 | 关；开；标签位于右侧 | 轨道 32 × 18（sm / md）/ 40 × 22（lg）；滑块为 14 / 18 菱形，距轨道边缘 2，切换时滑动并旋转 180°；轨道圆角 2 | 默认、悬停、焦点、选中（开）、禁用、加载（滑块内显示指示器） | 关：`--color-border-control`（轨道）+ `--color-bg-page`（滑块）；开：`--color-checked`（轨道）+ `--color-on-checked`（滑块）；`--radius-sm`、`--duration-base` |

### 反馈与提示

| 控件 | 变体 | 尺寸 | 状态 | 引用的 token |
| --- | --- | --- | --- | --- |
| 轻提示 | 中性；成功；警告；错误；可带一个操作按钮 | 宽 320–420；最小高 44；内边距 12 / 16；字号 14；左侧 4px 功能色条；位置为顶部居中，距视口顶部 64；最多同时显示 3 条，纵向间距 8 | 进入（自上方滑入 200ms）；停留（4s，含操作按钮时 8s，悬停时暂停计时）；退出（淡出 200ms）；错误类不自动消失 | `--color-bg-emphasis`、`--color-text-on-emphasis`、深色模式功能色 `-fg`、`--shadow-lg`、`--radius-sm`、`--duration-base` |
| 页面内提示条 | 信息；成功；警告；错误；可关闭 / 不可关闭；可附操作链接 | 宽度跟随容器；内边距 12 / 16；图标 16；标题 14 SansMedium，正文 13；左侧 3px 功能色条 + 1px 功能色边框 | 默认；关闭按钮的悬停、焦点 | `--color-{type}-bg`、`--color-{type}-border`、`--color-{type}-fg`、`--color-text-primary`、`--radius-sm` |
| 对话框 | 确认（宽 400）；表单（宽 560）；详情（宽 800）；危险确认（标题栏使用 45° 警示条纹） | 标题栏高 56，标题 18 SansMedium；内容区内边距 24；底部操作区高 64，按钮右对齐，主要操作位于最右；距视口边缘不小于 16；最大高度为视口高度减 64，内容区滚动 | 打开（遮罩淡入 + 面板上移 8px，200ms）；关闭（Esc、关闭按钮；表单对话框不响应遮罩点击）；打开期间焦点锁定在对话框内，关闭后焦点返回触发元素 | `--color-bg-raised`、`--color-bg-overlay`、`--color-border-subtle`、`--shadow-lg`、`--radius-md`、`--stripe-black`、`--duration-base` |
| 悬浮说明 | 纯文字；带快捷键提示（快捷键使用 `--font-tech`） | 最大宽 240；内边距 6 / 8；字号 12；与目标间距 6；不带箭头 | 显示（指针悬停 500ms 后，或键盘焦点进入时立即显示）；隐藏（离开 100ms 后，或按 Esc） | `--color-bg-emphasis`、`--color-text-on-emphasis`、`--radius-sm`、`--font-tech` |
| 加载指示器 | 旋转菱形（未知时长的局部操作）；骨架屏（内容区首次加载） | 旋转菱形外接 16 / 20 / 32，线宽 2 / 2 / 3，1 秒一周；骨架块圆角 2，高度与所替代的文字行高一致 | 进行中；300ms 后才显示；骨架屏以 1.2s 周期做明暗交替 | 旋转菱形：`currentColor`（边）+ `--color-border-subtle`（轨道）；骨架屏：`--color-bg-muted` |
| 进度条 | 确定进度；不确定进度（45° 条纹沿水平方向匀速平移） | 高 4（细）/ 8（标准）；圆角 1；标准尺寸可在右侧显示百分比，字号 12，使用 `--font-numeric` | 进行中；完成（填充变为 `--color-success-fg`）；失败（填充变为 `--color-error-fg`，下方显示原因）；暂停 | `--color-bg-muted`（轨道）、`--color-checked`（填充）、`--stripe-black`、`--color-success-fg`、`--color-error-fg`、`--font-numeric` |

### 导航

| 控件 | 变体 | 尺寸 | 状态 | 引用的 token |
| --- | --- | --- | --- | --- |
| 标签页 | 线型（页面内内容切换）；分段（视图与筛选切换，沿用源站 Selector，选中段为 `--color-checked` 底 + `--color-on-checked` 文字） | 高 36 / 44；水平内边距 12 / 16；字号 14 / 16；线型指示条 2px；分段外框圆角 2，内边距 2 | 默认、悬停、按下、焦点、选中、禁用 | `--color-text-secondary`、`--color-text-primary`、`--color-checked`、`--color-on-checked`、`--color-border-subtle`（线型底线）、`--color-state-hover` |
| 分页器 | 完整（上一页、页码、下一页、每页条数、跳转）；简洁（源站 Pagination：圆形前后按钮 + "1/6" 读数，仅用于轮播） | 页码按钮 32 × 32（md），间距 4；数字字号 13，使用 `--font-numeric`；超过 7 页时以省略号折叠中间页 | 默认、悬停、按下、焦点、选中（当前页：`--color-checked` 底 + `--color-on-checked` 数字）、禁用（首页的上一页、末页的下一页） | `--color-checked`、`--color-on-checked`、`--color-state-hover`、`--color-text-primary`、`--color-text-disabled`、`--radius-sm`、`--font-numeric` |
| 面包屑 | 标准；折叠（超过 4 级时，中间层级收入"…"下拉菜单） | 高 24；字号 13；分隔符 "/"，左右间距 8 | 链接项：默认、悬停、焦点；当前项：不可点击 | `--color-text-secondary`（链接项）、`--color-text-primary`（当前项）、`--color-text-tertiary`（分隔符） |
| 导航栏 | 侧边导航（源站 NavSidebar 结构：收起 64 仅显示图标，展开 240 显示图标与文字）；顶部栏（高 56，放置页面标题、全局搜索、用户菜单） | 导航项高 40；图标 20；字号 14；分组标题 12，`--color-text-tertiary`；收起状态下每项配悬浮说明 | 默认、悬停、按下、焦点、选中（当前页：`--color-bg-emphasis` 底 + `--color-text-on-emphasis` 文字 + 左侧 3px 品牌黄竖条）、展开 / 收起 | `--color-bg-surface`、`--color-border-subtle`、`--color-bg-emphasis`、`--color-text-on-emphasis`、`--color-accent`、`--color-state-hover`、`--duration-slow` |

### 内容展示

| 控件 | 变体 | 尺寸 | 状态 | 引用的 token |
| --- | --- | --- | --- | --- |
| 卡片 | 静态；可交互（整卡可点击）；可选中（多选场景） | 内边距 16 / 24；圆角 4；标题 16 SansMedium；不使用阴影，以 1px 边框区分层级 | 默认、悬停（可交互卡片边框变为 `--color-border-strong`，显示左上、右下角括号）、焦点、选中（`--color-checked` 边框 + `--color-bg-selected` 底 + 角括号 + 菱形标记）、禁用 | `--color-bg-surface`、`--color-border-subtle`、`--color-border-strong`、`--color-checked`、`--color-on-checked`、`--radius-md` |
| 标签 | 中性；强调（品牌黄底墨字）；成功；警告；错误；信息；可移除 | 高 20（sm）/ 24（md）；水平内边距 6 / 8；字号 12 / 13；圆角 2；可移除时右侧关闭图标 12 | 默认；可移除标签的关闭按钮悬停、焦点 | `--color-bg-muted`、`--color-text-primary`、`--color-accent`、`--color-text-on-accent`、`--color-{type}-bg`、`--color-{type}-fg`、`--color-{type}-border`、`--radius-sm` |
| 头像 | 图片；文字（取名称首字）；占位图标；可附在线状态点 | 24 / 32 / 40 / 64；圆形；文字字号为直径的 40%；状态点为 8px 菱形，外围 2px 页面底色 | 默认；可点击时悬停（外圈 2px `--color-border-strong`）、焦点 | `--radius-full`、`--color-bg-muted`、`--color-text-secondary`、`--color-success-fg`、`--color-bg-page` |
| 列表 | 单行；双行（主文 14 + 辅文 13）；带前置图标或头像；带后置操作 | 行高 32（紧凑）/ 40（单行）/ 56（双行）；水平内边距 12 / 16；行间 1px 分隔线可选 | 默认、悬停、按下、焦点、选中（`--color-bg-selected` + 左侧 3px `--color-checked` 竖条）、禁用 | `--color-state-hover`、`--color-state-pressed`、`--color-bg-selected`、`--color-checked`、`--color-border-subtle`、`--color-text-secondary` |
| 表格 | 标准；紧凑；固定表头；可排序列；行选择（首列复选框）；可展开行 | 表头高 40，字号 13 SansMedium，`--color-text-secondary`；数据行 48（标准）/ 36（紧凑）；单元格水平内边距 16 / 12；数字列右对齐并使用 `font-variant-numeric: tabular-nums` | 行：默认、悬停、选中、禁用；表头：可排序列悬停、排序中（显示升序或降序箭头）；整表：加载（骨架行）、空（显示空状态） | `--color-bg-surface`（表头）、`--color-border-subtle`、`--color-state-hover`、`--color-bg-selected`、`--color-checked`、`--color-text-primary`、`--color-text-secondary` |
| 分隔线 | 水平；垂直；带文字（居中标签，12px `--color-text-tertiary`） | 1px；内容内上下间距 16，区块之间 24 | 无 | `--color-border-subtle`、`--color-text-tertiary` |
| 空状态 | 首次使用（说明 + 主要操作）；无结果（说明 + 清除筛选）；加载失败（说明 + 重试） | 图标 48；标题 16 SansMedium；说明 14；最大宽 360；水平居中，容器内垂直居中；背景可叠加点阵纹理，不透明度 8% | 无 | `--color-text-tertiary`（图标）、`--color-text-primary`（标题）、`--color-text-secondary`（说明）、`--tex-points` |

## 附：控件表引用的非颜色 token

| Token | 值 | 用途 |
| --- | --- | --- |
| `--size-control-sm` / `-md` / `-lg` | 28px / 36px / 44px | 按钮、输入框、下拉选择高度 |
| `--space-1` … `--space-8` | 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48px | 间距，4px 基准 |
| `--radius-sm` | 2px | 按钮、输入框、复选框、标签、轻提示 |
| `--radius-hover` | 6px | 仅按钮悬停 |
| `--radius-md` | 4px | 卡片、对话框、菜单 |
| `--radius-full` | 9999px | 头像、圆形图标按钮 |
| `--shadow-sm` | `drop-shadow(0 0 2px rgba(0,0,0,.25))` | 按钮（源站 `--shadow-btn`） |
| `--shadow-lg` | `0 0 6px rgba(0,0,0,.4)` | 菜单、对话框、轻提示（源站 `--shadow-pop`） |
| `--duration-fast` / `--duration-base` / `--duration-slow` | 150ms / 200ms / 300ms | 悬浮说明 / 状态过渡 / 面板展开与开关滑块 |
| `--ease-standard` | `cubic-bezier(.45,0,.55,1)` | 位移与旋转；颜色过渡使用 `ease` |
| `--z-dropdown` / `--z-sticky` / `--z-overlay` / `--z-modal` / `--z-toast` / `--z-tooltip` | 100 / 200 / 1500 / 2000 / 3000 / 4000 | 层级 |
| `--font-body` / `--font-medium` | SansRegular / SansMedium | 界面文字 |
| `--font-numeric` | Novecentosanswide-Medium | 页码、进度百分比、读数 |
| `--font-tech` | SpaceGrotesk | ID、快捷键、代码类文本 |
| `--stripe-black` | 45° 条纹（`tokens/motifs.css`） | 危险确认标题栏、不确定进度 |
| `--tex-points` | 点阵纹理 | 空状态背景 |

## 附：参考 ReEnd-Components 的调整

参考 [VBeatDead/ReEnd-Components](https://github.com/VBeatDead/ReEnd-Components)（按终末地游戏界面制作的 React 组件库）后做出的调整。数值仍以源站为准。

**采纳**

- 菱形标记：单选框、开关滑块、状态点、步骤条与时间线节点统一使用菱形；复选框保留对勾，以便与单选框区分。
- 加载指示器改为旋转菱形。
- 可交互卡片在悬停与选中时显示左上、右下角括号。
- 补全字体、字号、间距、动效、层级与图标 token。
- 扩展控件 6 项：数字输入、步骤条、折叠面板、操作菜单、文件上传、时间线（规格见 `showcase.html`）。
- 每个控件列出键盘操作。

**未采纳**

| 做法 | 原因 |
| --- | --- |
| 切角按钮（clip-corner） | clip-path 会裁掉焦点环与阴影，并与源站按钮 2px → 6px 的圆角悬停冲突 |
| 禁用态整体透明度 40% | 文字对比度随所在背景变化，无法保证 |
| 浅色模式主色改为 hsl(42 90% 42%) 配白字 | 失去品牌黄；本规范保持黄色填充配墨色文字 |
| 悬停上移 1px 与黄色外发光 | 源站只使用环境阴影，状态变化不产生位移 |
| 界面文字全部使用 Orbitron 大写 | Orbitron 不含中文字形 |
| GlitchText、DataStream 等装饰组件 | 不属于功能控件 |
