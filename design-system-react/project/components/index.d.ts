/* ENDFIELD 设计系统 React 组件的类型说明。组件在 window.Endfield 上，页面需先加载 React 18 与 ReactDOM 18。 */
import type * as React from 'react';

export declare const ICONS: Record<IconName, [string, string]>;
export type IconName = "i-chev-l" | "i-chev-r" | "i-chev-d" | "i-tri-d" | "i-check" | "i-minus" | "i-close" | "i-arrow-r" | "i-arrow-dr" | "i-plus" | "i-search" | "i-info" | "i-success" | "i-warning" | "i-error" | "i-sort" | "i-sort-d" | "i-more" | "i-home" | "i-grid" | "i-list" | "i-box" | "i-user" | "i-sliders" | "i-doc" | "i-upload" | "i-filter" | "i-inbox" | "i-refresh" | "i-menu" | "i-trash" | "s-success" | "s-error" | "s-warning" | "s-info" | "n-home" | "n-operator" | "n-lore" | "n-calendar" | "n-notice" | "i-bolt" | "i-info-plain" | "k-up" | "k-down" | "k-left" | "k-right" | "i-copy";

/** 把全部图标写入页面一次，供 Icon 以 use 引用。组件包加载后自动调用。 */
export declare function mountSprite(): void;
export interface IconProps {
    /** 图标名，见 assets/Icons。i-* 界面图标，n-* 导航图标，s-* 彩色状态标记，k-* 方向键。 */
    name: IconName;
    /** 尺寸：默认 16（随文字），lg 20，xl 32。 */
    size?: 'md' | 'lg' | 'xl';
    /** 关闭默认动作类（加号、箭头、刷新、关闭）。 */
    still?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
/** 单色图标，颜色随文字；s-* 状态标记自带功能色。 */
export declare function Icon({ name, size, still, className, style }: IconProps): React.JSX.Element;

/** 拼接类名，忽略空值。 */
export declare function cx(...parts: Array<string | number | boolean | null | undefined>): string;
/** 受控与非受控两用的状态：传入 value 时由外部控制，否则使用 defaultValue 作为初始值。 */
export declare function useControllable<T>(value: T | undefined, defaultValue: T, onChange?: (v: T) => void): [T, (v: T) => void];
/** 列表内的方向键移动焦点，跳过禁用项；Home、End 到首尾。 */
export declare function moveFocus(e: React.KeyboardEvent, box: HTMLElement | null, selector: string, prev: string[], next: string[]): HTMLElement | null;

export type ButtonVariant = 'primary' | 'accent' | 'secondary' | 'ghost' | 'danger';
export type ControlSize = 'sm' | 'md' | 'lg';
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    /** primary 主要；accent 强调，每屏至多 1 个；secondary 次要；ghost 幽灵；danger 危险。 */
    variant?: ButtonVariant;
    /** sm 24、md 32（默认）、lg 40。同一行内的方形按钮取同一档。 */
    size?: ControlSize;
    /** 文字前的图标，例如 i-plus；带前置图标时不显示左侧竖条。 */
    icon?: IconName;
    /** 文字后的图标，例如 i-arrow-r。 */
    iconEnd?: IconName;
    /** 提交中：文字换为加载圈，按钮保持宽度并忽略点击。 */
    loading?: boolean;
    type?: 'button' | 'submit' | 'reset';
}
/** 触发一个动作的方形按钮。文字以动词开头，2 至 6 个字。 */
export declare function Button({ variant, size, icon, iconEnd, loading, className, children, type, onClick, ...rest }: ButtonProps): React.JSX.Element;
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'aria-label'> {
    /** 图标名。 */
    icon: IconName;
    /** 无障碍名称，必填；同时作为悬浮说明的文字。 */
    label: string;
    variant?: ButtonVariant;
    size?: ControlSize;
    /** 显示悬浮说明（默认显示在上方）。 */
    tooltip?: boolean | 'below';
    /** 切换型按钮的按下状态；传入后按钮成为切换按钮。 */
    pressed?: boolean;
    defaultPressed?: boolean;
    onPressedChange?: (pressed: boolean) => void;
    /** 右上角 8px 橙色提醒角标。 */
    badge?: boolean;
}
/** 只有图标的方形按钮，必须提供 label。 */
export declare function IconButton({ icon, label, variant, size, tooltip, pressed, defaultPressed, onPressedChange, badge, className, onClick, ...rest }: IconButtonProps): React.JSX.Element;
export interface CloseButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    /** close 关闭（悬停转 90 度）；back 返回（悬停左移）。 */
    kind?: 'close' | 'back';
    /** 深色面上使用白色。 */
    inverse?: boolean;
    /** 无障碍名称，默认“关闭”或“返回”。 */
    label?: string;
}
/** 无边界的关闭与返回按钮，用于对话框、提示条与面板标题。 */
export declare function CloseButton({ kind, inverse, label, className, ...rest }: CloseButtonProps): React.JSX.Element;
export interface RoundButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    direction: 'prev' | 'next';
    /** md 36（默认），lg 44。 */
    size?: 'md' | 'lg';
    label?: string;
}
/** 源站圆形翻页按钮，只用于轮播与图集翻页。 */
export declare function RoundButton({ direction, size, label, className, ...rest }: RoundButtonProps): React.JSX.Element;
export interface CapsuleButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    /** 进行中或已完成：显示为无边框灰底文字，不可点击。 */
    busy?: boolean;
}
/** 列表与卡片中的“前往”类胶囊按钮：文字居中，右侧墨色圆内为箭头。 */
export declare function CapsuleButton({ busy, className, children, ...rest }: CapsuleButtonProps): React.JSX.Element;
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** 独立链接：不带下划线，后跟箭头，悬停时箭头右移。 */
    standalone?: boolean;
    disabled?: boolean;
}
/** 文字链接。行内链接始终带下划线；跳转到另一页面用链接，不用按钮。 */
export declare function Link({ standalone, disabled, className, children, ...rest }: LinkProps): React.JSX.Element;

export type StatusTone = 'ok' | 'warn' | 'err' | 'info' | 'off';
export interface TagProps {
    /** neutral 中性（默认）；accent 品牌黄强调。 */
    variant?: 'neutral' | 'accent';
    /** 状态标签：图标加文字；off 不带图标。 */
    status?: StatusTone;
    /** sm 20，md 24（默认）。 */
    size?: 'sm' | 'md';
    /** 提供后显示移除按钮。 */
    onRemove?: () => void;
    tabIndex?: number;
    className?: string;
    children?: React.ReactNode;
}
/** 方形标签：分类、状态或已选值。 */
export declare function Tag({ variant, status, size, onRemove, tabIndex, className, children }: TagProps): React.JSX.Element;
export interface StatusProps {
    /** ok 进行中或成功（品牌黄）；warn 警告（橙）；err 错误（红）；info 信息（墨）；off 已归档（次要文字色，不带图标）。 */
    tone: StatusTone;
    children: React.ReactNode;
    className?: string;
}
/** 状态图标加文字，用于表格与列表。 */
export declare function Status({ tone, children, className }: StatusProps): React.JSX.Element;
export interface TagDateProps {
    type: string;
    date: string;
    className?: string;
}
/** 源站类型加日期组合，仅用于公告与版本记录。 */
export declare function TagDate({ type, date, className }: TagDateProps): React.JSX.Element;
export interface AvatarProps {
    /** 直径，默认 40。 */
    size?: number;
    /** 图片地址。 */
    src?: string;
    /** 图片或占位头像的无障碍名称。 */
    alt?: string;
    /** 文字头像：一个字。 */
    children?: React.ReactNode;
    /** 没有文字与图片时显示的图标，默认 i-user。 */
    icon?: IconName;
    /** 右下角状态点。 */
    status?: 'online' | 'off';
    /** 可点击时渲染为按钮，并提供 label。 */
    onClick?: () => void;
    label?: string;
    tabIndex?: number;
    className?: string;
}
/** 圆形头像：图片、文字或占位图标。 */
export declare function Avatar({ size, src, alt, children, icon, status, onClick, label, tabIndex, className }: AvatarProps): React.JSX.Element;
export interface AvatarStackProps {
    /** 头像，统一尺寸。 */
    children: React.ReactNode;
    /** 末尾“更多”头像代表的人数。 */
    more?: number;
    size?: number;
}
/** 堆叠头像：后一个压住前一个 8px。 */
export declare function AvatarStack({ children, more, size }: AvatarStackProps): React.JSX.Element;
export interface DividerProps {
    /** line 水平线；label 中间带文字；section 区块分隔（英文全大写）；vertical 竖线。 */
    variant?: 'line' | 'label' | 'section' | 'vertical';
    children?: React.ReactNode;
}
/** 分隔线。 */
export declare function Divider({ variant, children }: DividerProps): React.JSX.Element;
export interface CardProps {
    /** 英文分类，全大写显示。 */
    eyebrow?: string;
    title?: React.ReactNode;
    /** 正文。 */
    children?: React.ReactNode;
    /** 底部：编号、标签或状态。 */
    footer?: React.ReactNode;
    /** 链接卡片：整卡可点，右上角折角箭头。 */
    href?: string;
    /** 可选卡片：单击切换选中，右上角显示勾选角。 */
    selectable?: boolean;
    selected?: boolean;
    defaultSelected?: boolean;
    onSelectedChange?: (selected: boolean) => void;
    disabled?: boolean;
    style?: React.CSSProperties;
    className?: string;
}
/** 直角卡片：静态、链接、可选、禁用。 */
export declare function Card({ eyebrow, title, children, footer, href, selectable, selected, defaultSelected, onSelectedChange, disabled, style, className }: CardProps): React.JSX.Element;
export interface StatCardProps {
    eyebrow?: string;
    /** 读数名称。 */
    label: React.ReactNode;
    value: string | number;
    unit?: string;
    /** 变化量。 */
    delta?: {
        text: string;
        direction: 'up' | 'down';
    };
}
/** 读数卡片：Novecento 数字加单位与变化量。 */
export declare function StatCard({ eyebrow, label, value, unit, delta }: StatCardProps): React.JSX.Element;
export interface EntryCardProps {
    /** 深色标题条上的标题。 */
    title: React.ReactNode;
    /** 标题条右侧的读数，例如 12 / 18。 */
    meta?: React.ReactNode;
    /** 正文说明。 */
    children?: React.ReactNode;
    /** 右侧操作，通常为胶囊按钮。 */
    action?: React.ReactNode;
    /** 未开放：读数改用正文字体。 */
    off?: boolean;
}
/** 源站条目卡片：深色标题条加正文与胶囊按钮。 */
export declare function EntryCard({ title, meta, children, action, off }: EntryCardProps): React.JSX.Element;
export interface ListItemData {
    value: string;
    title: React.ReactNode;
    /** 第二行说明（双行）。 */
    subtitle?: React.ReactNode;
    icon?: IconName;
    /** 右侧补充：大小、时间等。 */
    trailing?: React.ReactNode;
    disabled?: boolean;
    /** 附加类名，例如规格展示中的 is-hover。 */
    className?: string;
}
export interface ListProps {
    /** two-line 双行，前置圆形图标；single 单行；compact 紧凑 32。 */
    variant?: 'two-line' | 'single' | 'compact';
    items: ListItemData[];
    /** 可选：单击或按空格、回车选中一项，上下方向键移动。 */
    selectable?: boolean;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    ariaLabel?: string;
    style?: React.CSSProperties;
}
/** 胶囊列表：选中项为 color-checked 实底。 */
export declare function List({ variant, items, selectable, value, defaultValue, onChange, ariaLabel, style }: ListProps): React.JSX.Element;
export interface EntryMenuItem {
    value: string;
    label: string;
    icon: IconName;
    href?: string;
}
export interface EntryMenuProps {
    items: EntryMenuItem[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    ariaLabel?: string;
}
/** 入口菜单：胶囊条目，圆形图标；悬停时文字右移、图标换为箭头，同一时刻只有一项高亮。 */
export declare function EntryMenu({ items, value, defaultValue, onChange, ariaLabel }: EntryMenuProps): React.JSX.Element;
export interface QuotaPillProps {
    icon: IconName;
    /** 当前用量。 */
    value: number;
    /** 上限；省略时只显示数值。 */
    max?: number;
    unit?: string;
    /** 加号按钮的无障碍名称，例如“扩容存储”。 */
    actionLabel: string;
    onAction?: () => void;
}
/** 额度胶囊：用量达到上限时数值变为强调色。 */
export declare function QuotaPill({ icon, value, max, unit, actionLabel, onAction }: QuotaPillProps): React.JSX.Element;
export interface MetricBadgeProps {
    label: string;
    /** 等级或编号，1 至 3 个字符。 */
    value: string;
    /** 说明按钮的无障碍名称。 */
    infoLabel: string;
    onInfo?: () => void;
}
/** 指标徽章：名称、Novecento 读数与说明按钮。 */
export declare function MetricBadge({ label, value, infoLabel, onInfo }: MetricBadgeProps): React.JSX.Element;
export interface EmptyStateProps {
    icon: IconName;
    title: React.ReactNode;
    /** 原因与下一步。 */
    children?: React.ReactNode;
    /** 唯一的操作按钮。 */
    action?: React.ReactNode;
}
/** 空状态：虚线框、点阵底纹、图标、标题、说明与一个操作。 */
export declare function EmptyState({ icon, title, children, action }: EmptyStateProps): React.JSX.Element;
export interface TableColumn<R> {
    key: string;
    label: string;
    /** 单元格类型：id 编号、name 名称、status 状态、time 时间、text 普通文字（默认）、number 数值。 */
    kind?: 'id' | 'name' | 'status' | 'time' | 'text' | 'number';
    /** 数值的单位，跟在数字后。 */
    unit?: string;
    /** 列宽；名称列不设。 */
    width?: number;
    /** 默认可排序；设为 false 时表头为纯文字。 */
    sortable?: boolean;
    /** 状态列：返回 true 时显示为错误状态。 */
    error?: (row: R) => boolean;
    /** 自定义单元格内容。 */
    render?: (row: R) => React.ReactNode;
    /** 自定义排序值。 */
    sortValue?: (row: R) => number | string;
}
export interface TableSort {
    key: string;
    dir: 'ascending' | 'descending';
}
export interface TableProps<R extends Record<string, unknown>> {
    columns: Array<TableColumn<R>>;
    rows: R[];
    /** 行的唯一键字段，默认 id。 */
    rowKey?: string;
    /** 行可选：单击行或按空格、回车切换选中，Shift 连续选中；表头左侧方块全选，Ctrl/Cmd+A 全选，Esc 清除。 */
    selectable?: boolean;
    selected?: string[];
    defaultSelected?: string[];
    onSelectedChange?: (keys: string[]) => void;
    sort?: TableSort;
    defaultSort?: TableSort;
    onSortChange?: (sort: TableSort) => void;
    /** 返回 true 的行为禁用行。 */
    isDisabled?: (row: R) => boolean;
    /** 最小宽度，默认 880；容器更窄时横向滚动。 */
    minWidth?: number;
    ariaLabel?: string;
}
/** 数据表格：深色表头，四角折线标记；单击表头排序，单击行选中。 */
export declare function Table<R extends Record<string, unknown>>({ columns, rows, rowKey, selectable, selected, defaultSelected, onSelectedChange, sort, defaultSort, onSortChange, isDisabled, minWidth, ariaLabel }: TableProps<R>): React.JSX.Element;
export interface SurfaceProps {
    /** brand 品牌黄整面；ink 墨色整面。色面不随主题变化。 */
    tone: 'brand' | 'ink';
    /** 源站等高线纹理（只用于黄色整面）。 */
    contour?: boolean;
    /** 巨型数字（只用于黄色整面，宽度不足 808 时隐藏）。 */
    numeral?: string;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
}
/** 大色面：内部重新定义颜色 token，放入的组件自动适配。 */
export declare function Surface({ tone, contour, numeral, style, className, children }: SurfaceProps): React.JSX.Element;
export interface GlassProps {
    /** 元素类型，默认 div；固定导航用 nav。 */
    as?: 'div' | 'nav' | 'header';
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
}
/** 磨砂玻璃：黑色 80% 加 8px 背景模糊，只放在墨色整面上。 */
export declare function Glass({ as, style, className, children }: GlassProps): React.DetailedReactHTMLElement<{
    className: string;
    style: React.CSSProperties | undefined;
}, HTMLElement>;

export type Tone = 'info' | 'success' | 'warning' | 'error';
export interface BannerProps {
    /** info 信息、success 成功、warning 警告、error 错误；左侧 4px 色条与图标随之变化。 */
    type: Tone;
    title: React.ReactNode;
    /** 说明，可含链接。 */
    children?: React.ReactNode;
    /** 提供后显示关闭按钮。 */
    onClose?: () => void;
}
/** 页面内提示条，常驻在相关内容上方。 */
export declare function Banner({ type, title, children, onClose }: BannerProps): React.JSX.Element;
export interface ToastProps {
    /** 省略为中性提示（无图标）。 */
    type?: Tone;
    children: React.ReactNode;
    /** 操作文字，例如“撤销”。 */
    action?: string;
    onAction?: () => void;
    /** 提供后显示关闭按钮。 */
    onClose?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}
/** 轻提示：深色底，左侧 4px 色条；一句话说明结果，至多一个操作。 */
export declare function Toast({ type, children, action, onAction, onClose, onMouseEnter, onMouseLeave }: ToastProps): React.JSX.Element;
type ShowToast = (type: Tone | undefined, msg: string, action?: string, onAction?: () => void) => void;
/** 取得显示轻提示的函数：show(type, 文案, 操作?, 操作回调?)。需在 ToastProvider 内使用。 */
export declare function useToast(): ShowToast;
export interface ToastProviderProps {
    children?: React.ReactNode;
}
/** 轻提示容器：页面顶部居中，最多 3 条；成功与信息 4 秒后消失，带操作时 8 秒，错误需手动关闭。 */
export declare function ToastProvider({ children }: ToastProviderProps): React.JSX.Element;
export interface TooltipProps {
    /** 说明文字；双行时为第二行。 */
    content: React.ReactNode;
    /** 双行说明的标题。 */
    title?: React.ReactNode;
    /** 快捷键，例如 Ctrl K。 */
    shortcut?: string;
    /** top 上方居中（默认）；below 下方；start 上方左对齐。 */
    placement?: 'top' | 'below' | 'start';
    /** 多行文字，最大宽 240。 */
    multiline?: boolean;
    /** 常显（规格展示）。 */
    open?: boolean;
    /** 触发元素，需可聚焦。 */
    children: React.ReactElement;
}
/** 悬浮说明：悬停或聚焦 500ms 后出现，Esc 隐藏。 */
export declare function Tooltip({ content, title, shortcut, placement, multiline, open, children }: TooltipProps): React.JSX.Element;
export interface DialogProps {
    /** 是否打开（模态）。inline 时忽略。 */
    open?: boolean;
    onClose?: () => void;
    title: React.ReactNode;
    /** 危险确认：深色实底标题栏，确认按钮为危险按钮。 */
    danger?: boolean;
    /** 正文。 */
    children?: React.ReactNode;
    /** 危险确认需要输入的文字；输入一致前确认按钮禁用。 */
    confirmText?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm?: () => void;
    /** 自定义底部；省略时为取消与确认两个按钮。 */
    footer?: React.ReactNode;
    /** 嵌在页面中显示（规格展示），不打开模态。 */
    inline?: boolean;
}
/** 对话框：宽 480，Esc 关闭，焦点锁定在对话框内。 */
export declare function Dialog({ open, onClose, title, danger, children, confirmText, confirmLabel, cancelLabel, onConfirm, footer, inline }: DialogProps): React.JSX.Element;
export interface LoadingProps {
    /** 直径 16、20（默认）、32。 */
    size?: 16 | 20 | 32;
    /** 旁边显示的文字；有文字时加载圈不单独朗读。 */
    label?: string;
    /** 无文字时的无障碍名称。 */
    ariaLabel?: string;
}
/** 加载圈：灰色轨道加墨色弧段（深色为黄色）。 */
export declare function Loading({ size, label, ariaLabel }: LoadingProps): React.JSX.Element;
export interface SkeletonProps {
    width?: number | string;
    height?: number | string;
    /** 圆形，用于头像占位。 */
    round?: boolean;
}
/** 骨架块：内容加载前的占位。 */
export declare function Skeleton({ width, height, round }: SkeletonProps): React.JSX.Element;
export interface ProgressProps {
    /** 0 至 100；省略时为不确定进度。 */
    value?: number;
    label: React.ReactNode;
    /** 替换右侧的百分比文字，例如“校验中”。 */
    valueText?: string;
    /** 细型 4px。 */
    thin?: boolean;
    /** done 完成；error 失败（红色填充）；paused 暂停（灰色填充）。 */
    status?: 'done' | 'error' | 'paused';
    /** 下方说明。 */
    note?: React.ReactNode;
    style?: React.CSSProperties;
}
/** 进度条：墨色填充（深色为黄色），纯色轨道。 */
export declare function Progress({ value, label, valueText, thin, status, note, style }: ProgressProps): React.JSX.Element;
export interface PageLoaderProps {
    /** vertical 纵向（黄色矩形自下而上铺满）；horizontal 横向窄屏。 */
    orientation?: 'vertical' | 'horizontal';
    /** 读数下方的文字。 */
    label?: string;
    /** 载入完成后显示的页面标题（示意）。 */
    appTitle?: string;
    /** 0 至 100；省略时自动演示一次载入。 */
    progress?: number;
    /** 改变此值时重新演示。 */
    replayKey?: number;
    onDone?: () => void;
}
/** 页面级载入：深色幕布、黄色进度、Novecento 读数；完成后幕布离开。 */
export declare function PageLoader({ orientation, label, appTitle, progress, replayKey, onDone }: PageLoaderProps): React.JSX.Element;
export interface ColorLineProps {
    /** horizontal 宽 196、高 4；vertical 宽 4、高 84。 */
    orientation?: 'horizontal' | 'vertical';
}
/** 源站粉、青、黄三段装饰色条，每屏至多一处，不进入控件内部。 */
export declare function ColorLine({ orientation }: ColorLineProps): React.JSX.Element;
export interface SectionHeaderProps {
    /** 镂空条纹大字，全大写英文。 */
    hollow: string;
    /** 两行英文：编号与英文标题。 */
    eyebrow: [string, string];
    title: React.ReactNode;
    /** 黄色分区带左侧的线稿插图。 */
    art?: {
        src: string;
        width: number;
        height: number;
    };
}
/** 长页面一级分区的标题：镂空大字、黄色分区带与线稿插图。 */
export declare function SectionHeader({ hollow, eyebrow, title, art }: SectionHeaderProps): React.JSX.Element;

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    /** 部分选中：用于“全选”框。 */
    indeterminate?: boolean;
    /** 错误：描边换为错误色。 */
    error?: boolean;
    /** md 16（默认），lg 20。 */
    size?: 'md' | 'lg';
    children?: React.ReactNode;
}
/** 复选框，用于需要提交的多选；立即生效的设置用开关。 */
export declare function Checkbox({ indeterminate, error, size, className, children, ...rest }: CheckboxProps): React.JSX.Element;
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    error?: boolean;
    size?: 'md' | 'lg';
    children?: React.ReactNode;
}
/** 单选框，同一组内用相同的 name。 */
export declare function Radio({ error, size, className, children, ...rest }: RadioProps): React.JSX.Element;
export interface OptionGroupProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
    /** 组标题。 */
    legend: React.ReactNode;
}
/** 复选框或单选框的分组，纵向排列，带组标题。 */
export declare function OptionGroup({ legend, className, children, ...rest }: OptionGroupProps): React.JSX.Element;
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    /** md 36×20（默认），lg 44×24。 */
    size?: 'md' | 'lg';
    /** 提交中：显示加载圈并禁止切换。 */
    loading?: boolean;
    children?: React.ReactNode;
}
/** 立即生效的二元设置；文字说明开关作用。 */
export declare function Switch({ size, loading, disabled, className, children, ...rest }: SwitchProps): React.JSX.Element;
export interface VerticalSwitchProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    /** md 36×60（默认），lg 72×120（源站原尺寸）。 */
    size?: 'md' | 'lg';
    /** 两个选项文字：上为关闭时，下为开启时。 */
    options: [string, string];
    /** 无障碍名称，描述开启时的含义。 */
    label: string;
    className?: string;
}
/** 两个视图之间的竖向切换（例如二维与三维），右侧写出两个选项。 */
export declare function VerticalSwitch({ checked, defaultChecked, onChange, disabled, size, options, label, className }: VerticalSwitchProps): React.JSX.Element;
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** 字段名；有字段名或说明时外层为 .field。 */
    label?: React.ReactNode;
    /** 必填标记。 */
    required?: boolean;
    /** 字段下方的说明。 */
    help?: React.ReactNode;
    /** 错误：true 只换描边；文字时同时在下方显示原因。 */
    error?: boolean | React.ReactNode;
    /** 前置图标，例如 i-search。 */
    icon?: IconName;
    /** 有内容时显示清除按钮。 */
    clearable?: boolean;
    /** 尾部单位，例如 MB。 */
    unit?: string;
    /** 填充底（无描边）。 */
    filled?: boolean;
    /** sm 24、md 32（默认）、lg 40。 */
    size?: ControlSize;
    /** 外层宽度等样式。 */
    style?: React.CSSProperties;
    /** 仅用于规格展示的静态状态。 */
    state?: 'hover' | 'focus';
}
/** 单行输入框，全圆角。 */
export declare function TextField({ label, required, help, error, icon, clearable, unit, filled, size, style, className, state, id, value, defaultValue, onChange, disabled, readOnly, ...rest }: TextFieldProps): React.JSX.Element;
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: React.ReactNode;
    required?: boolean;
    help?: React.ReactNode;
    error?: boolean | React.ReactNode;
    /** 外层宽度等样式。 */
    style?: React.CSSProperties;
}
/** 多行输入框，圆角 16；设置 maxLength 时右下角显示计数。 */
export declare function TextArea({ label, required, help, error, style, className, id, value, defaultValue, onChange, maxLength, ...rest }: TextAreaProps): React.JSX.Element;
export interface SelectOption {
    value: string;
    label: string;
    /** 右侧补充信息，例如编号。 */
    meta?: string;
    disabled?: boolean;
}
export interface SelectGroup {
    /** 英文分组名，全大写显示。 */
    group: string;
    options: SelectOption[];
}
export interface SelectProps {
    options: Array<SelectOption | SelectGroup>;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    /** 未选择时的占位文字。 */
    placeholder?: string;
    label?: React.ReactNode;
    help?: React.ReactNode;
    error?: boolean | React.ReactNode;
    disabled?: boolean;
    /** 加载选项中：显示加载圈与此文字。 */
    loading?: string;
    /** 菜单顶部带搜索框，按名称与补充信息过滤。 */
    searchable?: boolean;
    size?: ControlSize;
    /** 初始展开。 */
    defaultOpen?: boolean;
    /** 菜单随文档流排列，不浮于内容之上；用于常驻展开的选择面板。 */
    inline?: boolean;
    /** 无字段名时的无障碍名称。 */
    ariaLabel?: string;
    style?: React.CSSProperties;
    className?: string;
}
/** 单选下拉框，全圆角；菜单圆角 16。 */
export declare function Select({ options, value, defaultValue, onChange, placeholder, label, help, error, disabled, loading, searchable, size, defaultOpen, inline, ariaLabel, style, className }: SelectProps): React.JSX.Element;
export interface MultiSelectProps {
    options: SelectOption[];
    value?: string[];
    defaultValue?: string[];
    onChange?: (value: string[]) => void;
    placeholder?: string;
    /** 最多显示的标签数，其余合并为“另 N 项”。 */
    maxTags?: number;
    ariaLabel?: string;
    style?: React.CSSProperties;
    className?: string;
}
/** 多选下拉框：已选值显示为可移除的标签，圆角 16。 */
export declare function MultiSelect({ options, value, defaultValue, onChange, placeholder, maxTags, ariaLabel, style, className }: MultiSelectProps): React.JSX.Element;

export interface TabItem {
    value: string;
    label: React.ReactNode;
    /** 主标签的图标。 */
    icon?: IconName;
    /** 线型标签右侧的数量。 */
    count?: number;
    /** 提醒角标（主标签）。选中时自动隐藏。 */
    badge?: boolean;
    disabled?: boolean;
}
export interface TabsProps {
    /** main 主标签（黄色选中块，两端 Q、E 快捷键）；line 线型；block 区块。 */
    variant?: 'main' | 'line' | 'block';
    items: TabItem[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    ariaLabel?: string;
    style?: React.CSSProperties;
    className?: string;
}
/** 同一页面内的视图切换。左右方向键移动并选中；主标签另支持 Q、E。 */
export declare function Tabs({ variant, items, value, defaultValue, onChange, ariaLabel, style, className }: TabsProps): React.JSX.Element;
export interface SegmentOption {
    value: string;
    /** 文字；只有图标时省略并提供 ariaLabel。 */
    label?: React.ReactNode;
    icon?: IconName;
    ariaLabel?: string;
}
export interface SegmentedControlProps {
    options: SegmentOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    /** 组的无障碍名称。 */
    ariaLabel: string;
    className?: string;
}
/** 分段控件：2 至 5 个互斥选项，描边胶囊，选中项为内嵌胶囊。 */
export declare function SegmentedControl({ options, value, defaultValue, onChange, ariaLabel, className }: SegmentedControlProps): React.JSX.Element;
export interface Crumb {
    label: React.ReactNode;
    href?: string;
}
export interface BreadcrumbProps {
    /** 从上级到当前页；最后一项为当前页。 */
    items: Crumb[];
    /** 超过此层级数时折叠中间层级，默认 4。 */
    maxItems?: number;
    /** 不包 nav，直接输出列表（用于顶栏标题区）。 */
    bare?: boolean;
    style?: React.CSSProperties;
    className?: string;
}
/** 面包屑：上级为链接，当前页为文字；斜线分隔。 */
export declare function Breadcrumb({ items, maxItems, bare, style, className }: BreadcrumbProps): React.JSX.Element;
export interface PathProps {
    items: React.ReactNode[];
    className?: string;
}
/** 页面左上角的当前位置，前缀为两道斜线。 */
export declare function Path({ items, className }: PathProps): React.JSX.Element;
export interface PaginationProps {
    /** 总条数。 */
    total: number;
    pageSize?: number;
    page?: number;
    defaultPage?: number;
    onChange?: (page: number) => void;
    /** simple：只有上一页、页码、下一页。 */
    variant?: 'full' | 'simple';
    /** 显示“每页条数”与“跳至”（完整型）。 */
    extras?: boolean;
    className?: string;
}
/** 分页器：方形页码，当前页为墨色实底。 */
export declare function Pagination({ total, pageSize, page, defaultPage, onChange, variant, extras, className }: PaginationProps): React.JSX.Element;
export interface PageCapsuleProps {
    /** 总页数。 */
    total: number;
    page?: number;
    defaultPage?: number;
    onChange?: (page: number) => void;
    className?: string;
}
/** 源站翻页胶囊：两枚圆形按钮夹一排两位页码，窗口显示 4 个；当前页越出窗口时整排平移。用于轮播。 */
export declare function PageCapsule({ total, page, defaultPage, onChange, className }: PageCapsuleProps): React.JSX.Element;
export interface TopBarProps {
    /** 页面标题，过长时截断。 */
    title: React.ReactNode;
    /** 标题上方的面包屑（有上级页面时）。 */
    crumbs?: Crumb[];
    /** 搜索框占位文字；省略则不显示搜索。 */
    search?: string;
    onSearch?: (query: string) => void;
    /** 操作区：0 至 3 个按钮，图标按钮在前，至多一个主要按钮。 */
    actions?: React.ReactNode;
    /** 账户入口；侧边导航已有账户时省略。 */
    account?: React.ReactNode;
    /** 规格展示：标出四个槽位。 */
    annotate?: boolean;
    className?: string;
}
/** 页面顶栏：槽位从左到右固定为标题区、搜索、操作、账户；缺省的槽位直接省略。 */
export declare function TopBar({ title, crumbs, search, onSearch, actions, account, annotate, className }: TopBarProps): React.JSX.Element;
export interface SidebarItem {
    value: string;
    label: string;
    /** 导航图标，使用 n-* 源站图标或 i-* 界面图标。 */
    icon: IconName;
    href?: string;
    /** 提醒角标。 */
    badge?: boolean;
    /** 附加类名，例如规格展示中的 is-hover。 */
    className?: string;
}
export interface SidebarGroup {
    group: string;
}
export interface SidebarTool {
    label: string;
    icon: IconName;
    onClick?: () => void;
}
export interface SidebarProps {
    /** 产品名，展开时显示在标识区。 */
    name: string;
    items: Array<SidebarItem | SidebarGroup>;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    /** 底部工具区，1 至 3 个全局入口。 */
    tools?: SidebarTool[];
    /** 强制展开（规格展示）；省略时悬停或聚焦展开，单击左上角标记固定。 */
    open?: boolean;
    /** 只渲染部分区域（规格展示）。 */
    parts?: Array<'head' | 'list' | 'tools'>;
    ariaLabel?: string;
    className?: string;
}
/** 侧边导航：收起 64、展开 224，展开时覆盖内容；指示块随当前项移动。 */
export declare function Sidebar({ name, items, value, defaultValue, onChange, tools, open, parts, ariaLabel, className }: SidebarProps): React.JSX.Element;

declare global { interface Window { Endfield: typeof import('./index') } }
