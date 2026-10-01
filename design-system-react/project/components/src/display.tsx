import * as React from 'react';
import { Icon, IconName } from './icons';
import { cx, moveFocus, useControllable } from './util';

/* ---------- 标签与状态 ---------- */

export type StatusTone = 'ok' | 'warn' | 'err' | 'info' | 'off';

export interface TagProps {
  /** neutral 中性（默认）；accent 品牌黄强调。 */
  variant?: 'neutral' | 'accent';
  /** 带状态点的标签；plain 为空心点。 */
  status?: StatusTone | 'plain';
  /** sm 20，md 24（默认）。 */
  size?: 'sm' | 'md';
  /** 提供后显示移除按钮。 */
  onRemove?: () => void;
  tabIndex?: number;
  className?: string;
  children?: React.ReactNode;
}

/** 方形标签：分类、状态或已选值。 */
export function Tag({ variant = 'neutral', status, size = 'md', onRemove, tabIndex, className, children }: TagProps) {
  return (
    <span tabIndex={tabIndex} className={cx('tag', variant === 'accent' && 'tag--accent', size === 'sm' && 'tag--sm', status && 'stat', status && status !== 'plain' && 'stat--' + status, className)}>
      {children}
      {onRemove && <button className="rm" type="button" aria-label={'移除 ' + (typeof children === 'string' ? children : '')} onClick={onRemove}><Icon name="i-close" /></button>}
    </span>
  );
}

export interface StatusProps {
  /** ok 进行中或成功（品牌黄）；warn 警告（橙）；err 错误（红）；info 信息（墨）；off 已归档（空心）。 */
  tone: StatusTone;
  children: React.ReactNode;
  className?: string;
}

/** 8px 圆形状态点加文字，用于表格与列表。 */
export function Status({ tone, children, className }: StatusProps) {
  return <span className={cx('stat', 'stat--' + tone, className)}>{children}</span>;
}

export interface TagDateProps { type: string; date: string; className?: string }

/** 源站类型加日期组合，仅用于公告与版本记录。 */
export function TagDate({ type, date, className }: TagDateProps) {
  return <span className={cx('tagdate', className)}><span className="t">{type}</span><span className="d">{date}</span></span>;
}

/* ---------- 头像 ---------- */

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
export function Avatar({ size, src, alt, children, icon, status, onClick, label, tabIndex, className }: AvatarProps) {
  const style: React.CSSProperties & Record<string, string> = {};
  if (size) style['--s'] = size + 'px';
  if (src) { style.backgroundImage = 'url(' + src + ')'; style.backgroundSize = 'cover'; style.backgroundPosition = 'center'; }
  const inner = <>{children !== undefined ? children : !src && (icon || !className || className.indexOf('av--img') < 0) ? <Icon name={icon || 'i-user'} /> : null}
    {status && <span className={cx('dotst', status === 'off' && 'off')} aria-label={status === 'online' ? '在线' : '已归档'} />}</>;
  if (onClick) return <button className={cx('av', className)} style={style} type="button" aria-label={label} onClick={onClick}>{inner}</button>;
  const img = children === undefined;
  return <span className={cx('av', className)} style={style} tabIndex={tabIndex} role={img ? 'img' : undefined} aria-label={img ? alt : undefined}>{inner}</span>;
}

export interface AvatarStackProps {
  /** 头像，统一尺寸。 */
  children: React.ReactNode;
  /** 末尾“更多”头像代表的人数。 */
  more?: number;
  size?: number;
}

/** 堆叠头像：后一个压住前一个 8px。 */
export function AvatarStack({ children, more, size = 32 }: AvatarStackProps) {
  return (
    <div className="av-stack">
      {children}
      {more ? <Avatar size={size} className="more" alt={'另外 ' + more + ' 人'} icon="i-more" /> : null}
    </div>
  );
}

/* ---------- 分隔线 ---------- */

export interface DividerProps {
  /** line 水平线；label 中间带文字；section 区块分隔（英文全大写）；vertical 竖线。 */
  variant?: 'line' | 'label' | 'section' | 'vertical';
  children?: React.ReactNode;
}

/** 分隔线。 */
export function Divider({ variant = 'line', children }: DividerProps) {
  if (variant === 'vertical') return <span className="vsep" role="separator" aria-orientation="vertical" />;
  if (variant === 'label') return <div className="hr-label" role="separator">{children}</div>;
  if (variant === 'section') return <div className="hr-sec" role="separator">{children}</div>;
  return <hr className="hr" />;
}

/* ---------- 卡片 ---------- */

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
export function Card({ eyebrow, title, children, footer, href, selectable, selected, defaultSelected, onSelectedChange, disabled, style, className }: CardProps) {
  const [on, setOn] = useControllable<boolean>(selected, !!defaultSelected, onSelectedChange);
  const body = <>
    {eyebrow && <span className="card-eyebrow">{eyebrow}</span>}
    {title && <span className="card-title">{title}</span>}
    {href && <Icon name="i-arrow-dr" className="go" />}
    {children && <span className="card-body">{children}</span>}
    {footer && <div className="card-foot">{footer}</div>}
  </>;
  if (selectable) {
    return (
      <button className={cx('card card--link', className)} style={style} type="button" aria-pressed={on} disabled={disabled} onClick={() => setOn(!on)}>
        <span className="corner" aria-hidden="true"><Icon name="i-check" /></span>{body}
      </button>
    );
  }
  if (href && !disabled) return <a className={cx('card card--link', className)} style={style} href={href}>{body}</a>;
  return <div className={cx('card', disabled && 'is-disabled', className)} style={style} aria-disabled={disabled || undefined}>{body}</div>;
}

export interface StatCardProps {
  eyebrow?: string;
  /** 读数名称。 */
  label: React.ReactNode;
  value: string | number;
  unit?: string;
  /** 变化量。 */
  delta?: { text: string; direction: 'up' | 'down' };
}

/** 读数卡片：Novecento 数字加单位与变化量。 */
export function StatCard({ eyebrow, label, value, unit, delta }: StatCardProps) {
  return (
    <div className="card card--stat">
      {eyebrow && <span className="card-eyebrow">{eyebrow}</span>}
      <span className="card-body" style={{ color: 'var(--color-text-secondary)' }}>{label}</span>
      <div className="num"><b>{typeof value === 'number' ? value.toLocaleString('en-US') : value}</b>{unit && <span>{unit}</span>}</div>
      {delta && <span className={cx('delta', delta.direction)}><Icon name="i-sort-d" style={{ width: 12, height: 12, transform: delta.direction === 'up' ? 'rotate(180deg)' : undefined }} />{delta.text}</span>}
    </div>
  );
}

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
export function EntryCard({ title, meta, children, action, off }: EntryCardProps) {
  return (
    <div className={cx('entry', off && 'is-off')}>
      <div className="entry-strip">{title}{meta !== undefined && <span className="meta">{meta}</span>}</div>
      <div className="entry-body"><span className="desc">{children}</span>{action}</div>
    </div>
  );
}

/* ---------- 列表 ---------- */

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
export function List({ variant = 'single', items, selectable, value, defaultValue, onChange, ariaLabel, style }: ListProps) {
  const [cur, setCur] = useControllable<string | undefined>(value, defaultValue, onChange as ((v: string | undefined) => void) | undefined);
  const ref = React.useRef<HTMLUListElement>(null);
  const pick = (it: ListItemData) => { if (!it.disabled) setCur(it.value); };
  return (
    <ul ref={ref} className="list" style={style} role={selectable ? 'listbox' : undefined} aria-label={ariaLabel}
      onKeyDown={selectable ? (e) => moveFocus(e, ref.current, '.li', ['ArrowUp'], ['ArrowDown']) : undefined}>
      {items.map((it) => (
        <li key={it.value} className={cx('li', variant === 'two-line' && 'li--2', variant === 'compact' && 'li--c', it.disabled && 'is-disabled', it.className)}
          role={selectable ? 'option' : undefined} aria-selected={selectable || it.value === cur ? it.value === cur : undefined}
          aria-disabled={it.disabled || undefined} tabIndex={selectable && !it.disabled ? 0 : undefined}
          onClick={selectable ? () => pick(it) : undefined}
          onKeyDown={selectable ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(it); } } : undefined}>
          {variant === 'two-line' ? (it.icon && <span className="lead"><Icon name={it.icon} /></span>) : it.icon && <Icon name={it.icon} />}
          <span className="main"><b>{it.title}</b>{it.subtitle && <span>{it.subtitle}</span>}</span>
          {(variant === 'two-line' || it.trailing !== undefined) && <span className="trail">{it.trailing}</span>}
        </li>
      ))}
    </ul>
  );
}

export interface EntryMenuItem { value: string; label: string; icon: IconName; href?: string }

export interface EntryMenuProps {
  items: EntryMenuItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  ariaLabel?: string;
}

/** 入口菜单：胶囊条目，圆形图标；悬停时文字右移、图标换为箭头，同一时刻只有一项高亮。 */
export function EntryMenu({ items, value, defaultValue, onChange, ariaLabel }: EntryMenuProps) {
  const [cur, setCur] = useControllable<string | undefined>(value, defaultValue, onChange as ((v: string | undefined) => void) | undefined);
  return (
    <ul className="smenu" aria-label={ariaLabel}>
      {items.map((it) => (
        <li key={it.value}>
          <a className="smi" href={it.href || '#'} aria-current={it.value === cur ? 'true' : undefined} onClick={(e) => { if (!it.href) e.preventDefault(); setCur(it.value); }}>
            <span className="smi-ic"><Icon name={it.icon} still /><Icon name="i-arrow-r" still className="smi-go" /></span>
            <span className="smi-tx">{it.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/* ---------- 额度与指标 ---------- */

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
export function QuotaPill({ icon, value, max, unit, actionLabel, onAction }: QuotaPillProps) {
  const n = (x: number) => x.toLocaleString('en-US');
  return (
    <div className={cx('rpill', max !== undefined && value >= max && 'is-full')}>
      <Icon name={icon} still />
      <span className="v">{n(value)}{max !== undefined && <small>/{n(max)}</small>}{unit && <small className="u">{unit}</small>}</span>
      <span className="sep" />
      <button className="rplus" type="button" aria-label={actionLabel} onClick={onAction}><Icon name="i-plus" still /></button>
    </div>
  );
}

export interface MetricBadgeProps {
  label: string;
  /** 等级或编号，1 至 3 个字符。 */
  value: string;
  /** 说明按钮的无障碍名称。 */
  infoLabel: string;
  onInfo?: () => void;
}

/** 指标徽章：名称、Novecento 读数与说明按钮。 */
export function MetricBadge({ label, value, infoLabel, onInfo }: MetricBadgeProps) {
  return (
    <div className="ipill">
      <span className="l">{label}</span><span className="v">{value}</span>
      <button className="ibtn-i" type="button" aria-label={infoLabel} onClick={onInfo}><Icon name="i-info-plain" /></button>
    </div>
  );
}

/* ---------- 空状态 ---------- */

export interface EmptyStateProps {
  icon: IconName;
  title: React.ReactNode;
  /** 原因与下一步。 */
  children?: React.ReactNode;
  /** 唯一的操作按钮。 */
  action?: React.ReactNode;
}

/** 空状态：虚线框、点阵底纹、图标、标题、说明与一个操作。 */
export function EmptyState({ icon, title, children, action }: EmptyStateProps) {
  return (
    <div className="empty">
      <span className="empty-ic"><Icon name={icon} size="xl" /></span>
      <h5>{title}</h5>{children && <p>{children}</p>}{action}
    </div>
  );
}

/* ---------- 表格 ---------- */

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

export interface TableSort { key: string; dir: 'ascending' | 'descending' }

export interface TableProps<R extends Record<string, unknown>> {
  columns: Array<TableColumn<R>>;
  rows: R[];
  /** 行的唯一键字段，默认 id。 */
  rowKey?: string;
  /** 行可选：单击行或按空格、回车切换选中。 */
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

const ARROW = <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4 H10 L6 10 Z" fill="currentColor" /></svg>;

/** 数据表格：深色表头，四角折线标记；单击表头排序，单击行选中。 */
export function Table<R extends Record<string, unknown>>({ columns, rows, rowKey = 'id', selectable, selected, defaultSelected, onSelectedChange, sort, defaultSort, onSortChange, isDisabled, minWidth, ariaLabel }: TableProps<R>) {
  const [sel, setSel] = useControllable<string[]>(selected, defaultSelected || [], onSelectedChange);
  const [srt, setSrt] = useControllable<TableSort | undefined>(sort, defaultSort, onSortChange as ((s: TableSort | undefined) => void) | undefined);
  const body = React.useRef<HTMLTableSectionElement>(null);
  const keyOf = (r: R) => String(r[rowKey]);
  const valOf = (c: TableColumn<R>, r: R) => (c.sortValue ? c.sortValue(r) : (r[c.key] as number | string));
  const sorted = React.useMemo(() => {
    if (!srt) return rows;
    const c = columns.find((x) => x.key === srt.key);
    if (!c) return rows;
    const d = srt.dir === 'ascending' ? 1 : -1;
    return rows.slice().sort((a, b) => {
      const x = valOf(c, a), y = valOf(c, b);
      const r = typeof x === 'number' && typeof y === 'number' ? x - y : String(x).localeCompare(String(y), 'zh-Hans-CN');
      return r * d || keyOf(a).localeCompare(keyOf(b));
    });
  }, [rows, srt, columns]);
  const toggle = (r: R) => {
    if (!selectable || (isDisabled && isDisabled(r))) return;
    const k = keyOf(r);
    setSel(sel.indexOf(k) >= 0 ? sel.filter((x) => x !== k) : sel.concat(k));
  };
  const head = (c: TableColumn<R>) => {
    const num = c.kind === 'number';
    const on = srt && srt.key === c.key;
    if (c.sortable === false) return <th key={c.key} scope="col" className={num ? 'num' : undefined}>{c.label}</th>;
    const next = (): TableSort => ({ key: c.key, dir: on ? (srt!.dir === 'descending' ? 'ascending' : 'descending') : (num ? 'descending' : 'ascending') });
    return (
      <th key={c.key} scope="col" className={num ? 'num' : undefined} aria-sort={on ? srt!.dir : undefined}>
        <button type="button" onClick={() => setSrt(next())}>
          <span className="in">{num ? <>{ARROW}<span>{c.label}</span></> : <><span>{c.label}</span>{ARROW}</>}</span>
        </button>
      </th>
    );
  };
  const cell = (c: TableColumn<R>, r: R) => {
    const v = r[c.key];
    if (c.render) return <td key={c.key} className={c.kind === 'number' ? 'num' : undefined}>{c.render(r)}</td>;
    switch (c.kind) {
      case 'id': return <td key={c.key} className="c-id">{v as React.ReactNode}</td>;
      case 'name': return <td key={c.key} className="c-name">{v as React.ReactNode}</td>;
      case 'time': return <td key={c.key} className="c-time">{v as React.ReactNode}</td>;
      case 'status': return <td key={c.key} className={cx('c-stat', c.error && c.error(r) && 'is-err')}>{v as React.ReactNode}</td>;
      case 'number': return <td key={c.key} className="num"><b>{typeof v === 'number' ? v.toLocaleString('en-US') : (v as React.ReactNode)}</b>{c.unit}</td>;
      default: return <td key={c.key}>{v as React.ReactNode}</td>;
    }
  };
  return (
    <div className="tbl-frame">
      <i /><i /><i /><i />
      <div className="tbl-scroll">
        <table className="tbl" aria-multiselectable={selectable || undefined} aria-label={ariaLabel} style={minWidth !== undefined ? { minWidth } : undefined}>
          <colgroup>{columns.map((c) => <col key={c.key} style={c.width ? { width: c.width } : undefined} />)}</colgroup>
          <thead><tr>{columns.map(head)}</tr></thead>
          <tbody ref={body}>
            {sorted.map((r) => {
              const off = !!(isDisabled && isDisabled(r));
              const k = keyOf(r);
              return (
                <tr key={k} aria-disabled={off || undefined} tabIndex={selectable && !off ? 0 : undefined} aria-selected={selectable && !off ? sel.indexOf(k) >= 0 : undefined}
                  onClick={(e) => { if (!(e.target as HTMLElement).closest('button,a,input,label,select,textarea')) toggle(r); }}
                  onKeyDown={(e) => {
                    if (!selectable || e.target !== e.currentTarget) return;
                    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(r); }
                    else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                      e.preventDefault();
                      let n = e.currentTarget as Element | null;
                      do { n = e.key === 'ArrowDown' ? n!.nextElementSibling : n!.previousElementSibling; } while (n && n.getAttribute('aria-disabled') === 'true');
                      if (n) (n as HTMLElement).focus();
                    }
                  }}>
                  {columns.map((c) => cell(c, r))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------- 大色面与玻璃 ---------- */

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
export function Surface({ tone, contour, numeral, style, className, children }: SurfaceProps) {
  return (
    <div className={cx('surf', 'surf--' + tone, contour && 'surf--contour', className)} style={style}>
      {numeral && <span className="surf-num" aria-hidden="true">{numeral}</span>}
      {children}
    </div>
  );
}

export interface GlassProps {
  /** 元素类型，默认 div；固定导航用 nav。 */
  as?: 'div' | 'nav' | 'header';
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

/** 磨砂玻璃：黑色 80% 加 8px 背景模糊，只放在墨色整面上。 */
export function Glass({ as = 'div', style, className, children }: GlassProps) {
  return React.createElement(as, { className: cx('glass', className), style }, children);
}
