import * as React from 'react';
import { Icon } from './icons';
import { Button, CloseButton } from './actions';
import { cx } from './util';

export type Tone = 'info' | 'success' | 'warning' | 'error';
const MARK = { info: 's-info', success: 's-success', warning: 's-warning', error: 's-error' } as const;

/* ---------- 提示条 ---------- */

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
export function Banner({ type, title, children, onClose }: BannerProps) {
  return (
    <div className={'alert alert--' + type} role={type === 'error' ? 'alert' : 'status'}>
      <Icon name={MARK[type]} />
      <div className="alert-title">{title}</div>
      {onClose && <button className="x" type="button" aria-label="关闭" onClick={onClose}><Icon name="i-close" /></button>}
      {children && <div className="alert-body">{children}</div>}
    </div>
  );
}

/* ---------- 轻提示 ---------- */

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
export function Toast({ type, children, action, onAction, onClose, onMouseEnter, onMouseLeave }: ToastProps) {
  return (
    <div className={cx('toast', type && 'toast--' + type)} role={type === 'error' ? 'alert' : 'status'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {type && <Icon name={MARK[type]} />}
      <div className="msg">{children}</div>
      {action && <button className="act" type="button" onClick={onAction}>{action}</button>}
      {onClose && <button className="x" type="button" aria-label="关闭" onClick={onClose}><Icon name="i-close" /></button>}
    </div>
  );
}

interface ToastItem { id: number; type?: Tone; msg: string; action?: string; onAction?: () => void }
type ShowToast = (type: Tone | undefined, msg: string, action?: string, onAction?: () => void) => void;
const ToastContext = React.createContext<ShowToast>(() => undefined);

/** 取得显示轻提示的函数：show(type, 文案, 操作?, 操作回调?)。需在 ToastProvider 内使用。 */
export function useToast(): ShowToast {
  return React.useContext(ToastContext);
}

function TimedToast({ t, onDone }: { t: ToastItem; onDone: () => void }) {
  const ms = t.type === 'error' ? 0 : t.action ? 8000 : 4000;
  const timer = React.useRef<number | undefined>(undefined);
  const arm = React.useCallback(() => { if (ms) timer.current = window.setTimeout(onDone, ms); }, [ms, onDone]);
  React.useEffect(() => { arm(); return () => window.clearTimeout(timer.current); }, [arm]);
  return <Toast type={t.type} action={t.action} onAction={() => { if (t.onAction) t.onAction(); onDone(); }} onClose={onDone}
    onMouseEnter={() => window.clearTimeout(timer.current)} onMouseLeave={arm}>{t.msg}</Toast>;
}

export interface ToastProviderProps { children?: React.ReactNode }

/** 轻提示容器：页面顶部居中，最多 3 条；成功与信息 4 秒后消失，带操作时 8 秒，错误需手动关闭。 */
export function ToastProvider({ children }: ToastProviderProps) {
  const [list, setList] = React.useState<ToastItem[]>([]);
  const seq = React.useRef(0);
  const show = React.useCallback<ShowToast>((type, msg, action, onAction) => {
    setList((l) => l.concat({ id: ++seq.current, type, msg, action, onAction }).slice(-3));
  }, []);
  return (
    <ToastContext.Provider value={show}>
      {children}
      <div className="toast-stack" aria-live="polite">
        {list.map((t) => <TimedToast key={t.id} t={t} onDone={() => setList((l) => l.filter((x) => x.id !== t.id))} />)}
      </div>
    </ToastContext.Provider>
  );
}

/* ---------- 悬浮说明 ---------- */

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
export function Tooltip({ content, title, shortcut, placement = 'top', multiline, open, children }: TooltipProps) {
  const id = 'tip' + React.useId().replace(/:/g, '');
  const [off, setOff] = React.useState(false);
  const trigger = React.cloneElement(children, { 'aria-describedby': id } as Record<string, unknown>);
  return (
    <span className={cx('tip-host', off && 'tip-off')} onKeyDown={(e) => { if (e.key === 'Escape') setOff(true); }} onBlur={() => setOff(false)}>
      {trigger}
      <span id={id} role="tooltip" style={multiline ? { width: 220, whiteSpace: 'normal' } : undefined}
        className={cx('tip', title && 'tip--2', placement === 'start' && 'tip--start', placement === 'below' && 'tip--below', open && 'is-shown')}>
        {title ? <><b>{title}</b><span>{content}</span></> : <>{content}{shortcut && <kbd>{shortcut}</kbd>}</>}
      </span>
    </span>
  );
}

/* ---------- 对话框 ---------- */

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
export function Dialog({ open, onClose, title, danger, children, confirmText, confirmLabel, cancelLabel = '取消', onConfirm, footer, inline }: DialogProps) {
  const ref = React.useRef<HTMLDialogElement>(null);
  const tid = 'dlg' + React.useId().replace(/:/g, '');
  const [typed, setTyped] = React.useState('');
  React.useEffect(() => {
    const d = ref.current;
    if (!d || inline) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open, inline]);
  React.useEffect(() => { if (!open) setTyped(''); }, [open]);
  const ok = !confirmText || inline || typed.trim() === confirmText;
  const panel = (
    <div className={cx('dialog', danger && 'dialog--danger')} role={inline ? (danger ? 'alertdialog' : 'dialog') : undefined} aria-labelledby={inline ? tid : undefined}>
      <div className="dlg-head"><h4 id={tid}>{title}</h4><CloseButton inverse={danger} onClick={onClose} /></div>
      <div className="dlg-body">
        {children}
        {confirmText && <div className="input"><input aria-label="确认文字" placeholder={confirmText} autoComplete="off" value={typed} onChange={(e) => setTyped(e.target.value)} /></div>}
      </div>
      <div className="dlg-foot">
        {footer || <>
          <Button variant="secondary" size="sm" onClick={onClose}>{cancelLabel}</Button>
          <Button variant={danger ? 'danger' : 'primary'} size="sm" disabled={!ok} onClick={() => { if (onConfirm) onConfirm(); if (onClose) onClose(); }}>{confirmLabel || (danger ? '删除' : '确定')}</Button>
        </>}
      </div>
    </div>
  );
  if (inline) return panel;
  return <dialog ref={ref} className="real" aria-labelledby={tid} onClose={() => { if (open && onClose) onClose(); }}>{panel}</dialog>;
}

/* ---------- 加载 ---------- */

export interface LoadingProps {
  /** 直径 16、20（默认）、32。 */
  size?: 16 | 20 | 32;
  /** 旁边显示的文字；有文字时加载圈不单独朗读。 */
  label?: string;
  /** 无文字时的无障碍名称。 */
  ariaLabel?: string;
}

/** 加载圈：灰色轨道加墨色弧段（深色为黄色）。 */
export function Loading({ size = 20, label, ariaLabel = '加载中' }: LoadingProps) {
  const cls = 'spin spin--track spin--' + size;
  if (!label) return <span className={cls} role="status" aria-label={ariaLabel} />;
  return <span role="status" style={{ display: 'inline-flex', gap: 8, alignItems: 'center', fontSize: 13, color: 'var(--color-text-secondary)' }}><span className={cls} aria-hidden="true" />{label}</span>;
}

export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  /** 圆形，用于头像占位。 */
  round?: boolean;
}

/** 骨架块：内容加载前的占位。 */
export function Skeleton({ width, height, round }: SkeletonProps) {
  return <span className="skel" style={{ width, height, borderRadius: round ? '50%' : undefined }} />;
}

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
export function Progress({ value, label, valueText, thin, status, note, style }: ProgressProps) {
  const indet = value === undefined;
  return (
    <div className={cx('prog', thin && 'prog--thin', indet && 'prog-indet', status && 'is-' + status)} style={style} role="progressbar"
      aria-valuenow={indet ? undefined : value} aria-valuemin={indet ? undefined : 0} aria-valuemax={indet ? undefined : 100} aria-label={typeof label === 'string' ? label : undefined}>
      <div className="prog-top"><span>{label}</span><span className="v">{valueText || (indet ? '' : value + '%')}</span></div>
      <div className="prog-track"><div className="prog-fill" style={indet ? undefined : ({ '--v': value + '%' } as React.CSSProperties)} /></div>
      {note && <span className="prog-note">{status === 'done' && <Icon name="s-success" />}{status === 'error' && <Icon name="s-error" />}{note}</span>}
    </div>
  );
}

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
export function PageLoader({ orientation = 'vertical', label = '正在载入', appTitle = '工作区', progress, replayKey, onDone }: PageLoaderProps) {
  const [p, setP] = React.useState(0);
  const [phase, setPhase] = React.useState<'run' | 'leaving' | 'done'>('run');
  const cur = progress !== undefined ? Math.min(100, Math.max(0, progress)) : p;
  React.useEffect(() => {
    if (progress !== undefined) return;
    setP(0); setPhase('run');
    let v = 0;
    const t = window.setInterval(() => {
      v = Math.min(100, v + Math.ceil(Math.random() * (v < 80 ? 12 : 5)));
      setP(v);
      if (v >= 100) window.clearInterval(t);
    }, 160);
    return () => window.clearInterval(t);
  }, [replayKey, progress === undefined]);
  React.useEffect(() => {
    if (cur < 100) { setPhase('run'); return; }
    setPhase('leaving');
    const d = window.setTimeout(() => { setPhase('done'); if (onDone) onDone(); }, 1600);
    return () => window.clearTimeout(d);
  }, [cur >= 100, replayKey]);
  return (
    <div className={cx('ldr', orientation === 'horizontal' && 'ldr--narrow')}>
      <div className="ldr-app" aria-hidden="true"><h5>{appTitle}</h5><i /><i /><i /><i /></div>
      <div className={cx('ldr-screen', phase !== 'run' && 'is-leaving', phase === 'done' && 'is-done')} role="progressbar" aria-label={label}
        aria-valuemin={0} aria-valuemax={100} aria-valuenow={cur} style={{ '--p': cur } as React.CSSProperties}>
        <div className="ldr-bar"><i /></div>
        <div className="ldr-read" aria-hidden="true"><span className="ldr-core"><span><b>{cur}</b><small>%</small></span></span><span className="ldr-deco" /><span className="ldr-label">{label}</span></div>
      </div>
    </div>
  );
}

/* ---------- 装饰 ---------- */

export interface ColorLineProps {
  /** horizontal 宽 196、高 4；vertical 宽 4、高 84。 */
  orientation?: 'horizontal' | 'vertical';
}

/** 源站粉、青、黄三段装饰色条，每屏至多一处，不进入控件内部。 */
export function ColorLine({ orientation = 'horizontal' }: ColorLineProps) {
  return <span className={cx('cline', orientation === 'vertical' && 'cline--v')} aria-hidden="true"><i /><i /><i /></span>;
}

export interface SectionHeaderProps {
  /** 镂空条纹大字，全大写英文。 */
  hollow: string;
  /** 两行英文：编号与英文标题。 */
  eyebrow: [string, string];
  title: React.ReactNode;
  /** 黄色分区带左侧的线稿插图。 */
  art?: { src: string; width: number; height: number };
}

/** 长页面一级分区的标题：镂空大字、黄色分区带与线稿插图。 */
export function SectionHeader({ hollow, eyebrow, title, art }: SectionHeaderProps) {
  return (
    <div className="bp-head">
      <div className="hollow" aria-hidden="true">{hollow}</div>
      <div className="band">
        {art && <img className="band-art" src={art.src} alt="" style={{ width: art.width, height: art.height }} />}
        <div className="band-tx" style={art ? ({ '--art': art.width + 'px' } as React.CSSProperties) : undefined}>
          <span className="band-en"><span>{eyebrow[0]}</span><span>{eyebrow[1]}</span></span>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
}
