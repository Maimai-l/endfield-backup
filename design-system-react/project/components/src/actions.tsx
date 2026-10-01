import * as React from 'react';
import { Icon, IconName } from './icons';
import { cx, useControllable } from './util';

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
export function Button({ variant = 'secondary', size = 'md', icon, iconEnd, loading, className, children, type = 'button', onClick, ...rest }: ButtonProps) {
  return (
    <button {...rest} type={type} aria-busy={loading || undefined}
      onClick={loading ? undefined : onClick}
      className={cx('btn', 'btn--' + variant, size !== 'md' && 'btn--' + size, loading && 'is-loading', className)}>
      <span className="lbl">{icon && <Icon name={icon} />}{children}{iconEnd && <Icon name={iconEnd} />}</span>
      {loading && <span className="spin" aria-hidden="true" />}
    </button>
  );
}

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
export function IconButton({ icon, label, variant = 'secondary', size = 'md', tooltip, pressed, defaultPressed, onPressedChange, badge, className, onClick, ...rest }: IconButtonProps) {
  const toggle = pressed !== undefined || defaultPressed !== undefined;
  const [on, setOn] = useControllable<boolean>(pressed, !!defaultPressed, onPressedChange);
  const btn = (
    <button {...rest} type="button" aria-label={label} aria-pressed={toggle ? on : undefined}
      onClick={(e) => { if (toggle) setOn(!on); if (onClick) onClick(e); }}
      className={cx('btn', 'btn--' + variant, 'ibtn', size !== 'md' && 'btn--' + size, toggle && on && 'is-pressed', className)}>
      <Icon name={icon} size={size === 'lg' ? 'lg' : 'md'} />
      {badge && <span className="badge" />}
    </button>
  );
  if (!tooltip) return btn;
  return <span className="tip-host">{btn}<span className={cx('tip', tooltip === 'below' && 'tip--below')} role="tooltip">{label}</span></span>;
}

export interface CloseButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** close 关闭（悬停转 90 度）；back 返回（悬停左移）。 */
  kind?: 'close' | 'back';
  /** 深色面上使用白色。 */
  inverse?: boolean;
  /** 无障碍名称，默认“关闭”或“返回”。 */
  label?: string;
}

/** 无边界的关闭与返回按钮，用于对话框、提示条与面板标题。 */
export function CloseButton({ kind = 'close', inverse, label, className, ...rest }: CloseButtonProps) {
  return (
    <button {...rest} type="button" aria-label={label || (kind === 'back' ? '返回' : '关闭')} className={cx('cbtn', inverse && 'cbtn--inv', className)}>
      {kind === 'back' ? <Icon name="i-chev-l" className="ic--back" /> : <Icon name="i-close" />}
    </button>
  );
}

export interface RoundButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  direction: 'prev' | 'next';
  /** md 36（默认），lg 44。 */
  size?: 'md' | 'lg';
  label?: string;
}

/** 源站圆形翻页按钮，只用于轮播与图集翻页。 */
export function RoundButton({ direction, size = 'md', label, className, ...rest }: RoundButtonProps) {
  return (
    <button {...rest} type="button" aria-label={label || (direction === 'prev' ? '上一张' : '下一张')} className={cx('rbtn', size === 'lg' && 'rbtn--lg', className)}>
      <Icon name={direction === 'prev' ? 'i-chev-l' : 'i-chev-r'} />
    </button>
  );
}

export interface CapsuleButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** 进行中或已完成：显示为无边框灰底文字，不可点击。 */
  busy?: boolean;
}

/** 列表与卡片中的“前往”类胶囊按钮：文字居中，右侧墨色圆内为箭头。 */
export function CapsuleButton({ busy, className, children, ...rest }: CapsuleButtonProps) {
  if (busy) return <span className={cx('cap-btn is-busy', className)} role="status">{children}</span>;
  return (
    <button {...rest} type="button" className={cx('cap-btn', className)}>
      <span className="lbl">{children}</span>
      <span className="go"><Icon name="i-chev-r" className="ic--arrow" /></span>
    </button>
  );
}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** 独立链接：不带下划线，后跟箭头，悬停时箭头右移。 */
  standalone?: boolean;
  disabled?: boolean;
}

/** 文字链接。行内链接始终带下划线；跳转到另一页面用链接，不用按钮。 */
export function Link({ standalone, disabled, className, children, ...rest }: LinkProps) {
  if (disabled) return <span className={cx('link is-disabled', className)} aria-disabled="true">{children}</span>;
  return (
    <a {...rest} className={cx('link', standalone && 'link--go', className)}>
      {children}{standalone && <Icon name="i-arrow-r" />}
    </a>
  );
}
