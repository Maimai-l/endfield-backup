import * as React from 'react';
import { Icon, IconName } from './icons';
import { RoundButton } from './actions';
import { cx, moveFocus, useControllable } from './util';

/* ---------- 标签页 ---------- */

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
export function Tabs({ variant = 'line', items, value, defaultValue, onChange, ariaLabel, style, className }: TabsProps) {
  const [cur, setCur] = useControllable<string>(value, defaultValue !== undefined ? defaultValue : items[0].value, onChange);
  const ref = React.useRef<HTMLDivElement>(null);
  const pick = (v: string) => setCur(v);
  const onKey = (e: React.KeyboardEvent) => {
    const k = e.key.toLowerCase();
    if (variant === 'main' && (k === 'q' || k === 'e')) {
      const live = items.filter((t) => !t.disabled);
      const i = live.findIndex((t) => t.value === cur);
      const n = live[(i + (k === 'e' ? 1 : -1) + live.length) % live.length];
      pick(n.value);
      const el = ref.current && ref.current.querySelector<HTMLElement>('[data-v="' + n.value + '"]');
      if (el) el.focus();
      e.preventDefault();
      return;
    }
    const n = moveFocus(e, ref.current, '[role=tab]', ['ArrowLeft'], ['ArrowRight']);
    if (n) pick(n.getAttribute('data-v') || '');
  };
  const tab = (t: TabItem, cls: string, inner: React.ReactNode) => (
    <button key={t.value} data-v={t.value} className={cls} type="button" role="tab" aria-selected={t.value === cur} tabIndex={t.value === cur ? 0 : -1}
      disabled={t.disabled} onClick={() => pick(t.value)}>{inner}</button>
  );
  if (variant === 'main') {
    return (
      <div ref={ref} className={cx('mtabs', className)} role="tablist" aria-label={ariaLabel} style={style} onKeyDown={onKey}>
        <span className="key" aria-hidden="true">Q</span>
        {items.map((t) => tab(t, 'mtab', <>{t.icon && <Icon name={t.icon} />}{t.label}{t.badge && <span className="badge" aria-label="有新内容" />}</>))}
        <span className="key" aria-hidden="true">E</span>
      </div>
    );
  }
  if (variant === 'block') {
    return (
      <div ref={ref} className={cx('btabs', className)} role="tablist" aria-label={ariaLabel} style={style} onKeyDown={onKey}>
        {items.map((t, i) => (
          <React.Fragment key={t.value}>
            {i > 0 && <span className="div" />}
            {tab(t, 'btab', <>{t.label}<span className="arr"><Icon name="i-chev-r" /></span></>)}
          </React.Fragment>
        ))}
      </div>
    );
  }
  return (
    <div ref={ref} className={cx('tabs', className)} role="tablist" aria-label={ariaLabel} style={style} onKeyDown={onKey}>
      {items.map((t) => tab(t, 'tab', <>{t.label}{t.count !== undefined && <span className="n">{t.count}</span>}</>))}
    </div>
  );
}

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
export function SegmentedControl({ options, value, defaultValue, onChange, ariaLabel, className }: SegmentedControlProps) {
  const [cur, setCur] = useControllable<string>(value, defaultValue !== undefined ? defaultValue : options[0].value, onChange);
  return (
    <div className={cx('seg', className)} role="group" aria-label={ariaLabel}>
      {options.map((o) => (
        <button key={o.value} type="button" aria-pressed={o.value === cur} aria-label={o.ariaLabel} onClick={() => setCur(o.value)}>
          {o.icon && <Icon name={o.icon} />}{o.label}
        </button>
      ))}
    </div>
  );
}

/* ---------- 面包屑与路径 ---------- */

export interface Crumb { label: React.ReactNode; href?: string }

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
export function Breadcrumb({ items, maxItems = 4, bare, style, className }: BreadcrumbProps) {
  const [expanded, setExpanded] = React.useState(false);
  const fold = !expanded && items.length > maxItems;
  const hidden = items.length - 3;
  const li = (c: Crumb, i: number, last: boolean) => (
    <li key={i}>{last || !c.href ? <span aria-current={last ? 'page' : undefined}>{c.label}</span> : <a href={c.href}>{c.label}</a>}</li>
  );
  const list = (
    <ol className={cx('crumbs', className)} style={style}>
      {fold
        ? [li(items[0], 0, false),
          <li key="more"><button className="more" type="button" aria-label={'显示 ' + hidden + ' 个隐藏层级'} onClick={() => setExpanded(true)}><Icon name="i-more" /></button></li>,
          ...items.slice(-2).map((c, i) => li(c, items.length - 2 + i, i === 1))]
        : items.map((c, i) => li(c, i, i === items.length - 1))}
    </ol>
  );
  return bare ? list : <nav aria-label="面包屑">{list}</nav>;
}

export interface PathProps { items: React.ReactNode[]; className?: string }

/** 页面左上角的当前位置，前缀为两道斜线。 */
export function Path({ items, className }: PathProps) {
  return <span className={cx('path', className)}>{items.map((t, i) => <span key={i}>{t}</span>)}</span>;
}

/* ---------- 分页 ---------- */

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

function windowPages(cur: number, last: number): Array<number | 'gap'> {
  if (last <= 7) return Array.from({ length: last }, (_, i) => i + 1);
  if (cur <= 4) return [1, 2, 3, 4, 5, 'gap', last];
  if (cur >= last - 3) return [1, 'gap', last - 4, last - 3, last - 2, last - 1, last];
  return [1, 'gap', cur - 1, cur, cur + 1, 'gap', last];
}

/** 分页器：方形页码，当前页为墨色实底。 */
export function Pagination({ total, pageSize = 10, page, defaultPage = 1, onChange, variant = 'full', extras = true, className }: PaginationProps) {
  const last = Math.max(1, Math.ceil(total / pageSize));
  const [cur, setCur] = useControllable<number>(page, defaultPage, onChange);
  const go = (n: number) => setCur(Math.min(last, Math.max(1, n)));
  const [jump, setJump] = React.useState(String(cur));
  React.useEffect(() => setJump(String(cur)), [cur]);
  const prev = <button className="pg" type="button" aria-label="上一页" disabled={cur <= 1} onClick={() => go(cur - 1)}><Icon name="i-chev-l" /></button>;
  const next = <button className="pg" type="button" aria-label="下一页" disabled={cur >= last} onClick={() => go(cur + 1)}><Icon name="i-chev-r" /></button>;
  if (variant === 'simple') {
    return <nav className={cx('pager', className)} aria-label="分页">{prev}<span className="total" style={{ margin: '0 8px' }}><b>{cur}</b> / <b>{last}</b></span>{next}</nav>;
  }
  return (
    <nav className={cx('pager', className)} aria-label="分页">
      <span className="total">共 <b>{total}</b> 条</span>
      {prev}
      {windowPages(cur, last).map((p, i) => p === 'gap'
        ? <span key={'g' + i} className="pg-gap" aria-hidden="true"><Icon name="i-more" /></span>
        : <button key={p} className="pg" type="button" aria-current={p === cur ? 'page' : undefined} onClick={() => go(p)}>{p}</button>)}
      {next}
      {extras && <span className="size"><button className="input select input--sm" type="button" aria-label="每页条数"><span className="val">每页 {pageSize} 条</span><Icon name="i-tri-d" className="tri" /></button></span>}
      {extras && <span className="jump">跳至<span className="input input--sm"><input aria-label="页码" value={jump} inputMode="numeric"
        onChange={(e) => setJump(e.target.value.replace(/\D/g, ''))} onKeyDown={(e) => { if (e.key === 'Enter') go(+jump || 1); }} /></span>页</span>}
    </nav>
  );
}

export interface PageCapsuleProps {
  /** 总页数。 */
  total: number;
  page?: number;
  defaultPage?: number;
  onChange?: (page: number) => void;
  className?: string;
}

/** 源站翻页胶囊：两枚圆形按钮夹一排两位页码，窗口显示 4 个；当前页越出窗口时整排平移。用于轮播。 */
export function PageCapsule({ total, page, defaultPage = 1, onChange, className }: PageCapsuleProps) {
  const [cur, setCur] = useControllable<number>(page, defaultPage, onChange);
  const off = React.useRef(0);
  let o = off.current;
  if (cur - 1 < o) o = cur - 1;
  if (cur - 1 > o + 3) o = cur - 4;
  off.current = o = Math.max(0, Math.min(o, Math.max(0, total - 4)));
  const nums = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className={cx('pcap', className)}>
      <RoundButton direction="prev" disabled={cur <= 1} onClick={() => setCur(Math.max(1, cur - 1))} />
      <div className="pcar" aria-live="polite" style={{ '--off': o, '--n': Math.min(total, 4) } as React.CSSProperties}>
        {nums.map((n) => <span key={n} className="pblk" style={{ '--i': n - 1 } as React.CSSProperties} aria-current={n === cur ? 'page' : undefined}>{(n < 10 ? '0' : '') + n}</span>)}
      </div>
      <RoundButton direction="next" disabled={cur >= total} onClick={() => setCur(Math.min(total, cur + 1))} />
    </div>
  );
}

/* ---------- 顶栏 ---------- */

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
export function TopBar({ title, crumbs, search, onSearch, actions, account, annotate, className }: TopBarProps) {
  const slot = (name: string) => (annotate ? { 'data-slot': name } : {});
  return (
    <header className={cx('topbar', className)}>
      <div className={cx('title', annotate && 'slot')} {...slot('标题区（必需）')}>
        {crumbs && <Breadcrumb items={crumbs} bare style={{ fontSize: 12, minHeight: 18 }} />}
        <b>{title}</b>
      </div>
      {search && <div className={cx('input search', annotate && 'slot')} {...slot('搜索（可选）')}><Icon name="i-search" /><input aria-label={search} placeholder={search}
        onKeyDown={(e) => { if (e.key === 'Enter' && onSearch) onSearch((e.target as HTMLInputElement).value); }} /></div>}
      {actions && <div className={cx('acts', annotate && 'slot')} {...slot('操作（0 至 3 个）')}>{actions}</div>}
      {account && (annotate ? <span className="slot" data-slot="账户（可选）" style={{ display: 'inline-flex' }}>{account}</span> : account)}
    </header>
  );
}

/* ---------- 侧边导航 ---------- */

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
export interface SidebarGroup { group: string }
export interface SidebarTool { label: string; icon: IconName; onClick?: () => void }

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
export function Sidebar({ name, items, value, defaultValue, onChange, tools, open, parts = ['head', 'list', 'tools'], ariaLabel = '主导航', className }: SidebarProps) {
  const first = items.find((i): i is SidebarItem => 'value' in i);
  const [cur, setCur] = useControllable<string>(value, defaultValue !== undefined ? defaultValue : first ? first.value : '', onChange);
  const [hover, setHover] = React.useState(false);
  const [pinned, setPinned] = React.useState(false);
  const nav = React.useRef<HTMLElement>(null);
  const list = React.useRef<HTMLDivElement>(null);
  const isOpen = open !== undefined ? open : pinned || hover;
  React.useLayoutEffect(() => {
    const c = list.current && list.current.querySelector<HTMLElement>('.sn-item[aria-current]');
    if (c && list.current) list.current.style.setProperty('--y', c.offsetTop + 'px');
  }, [cur, items]);
  const live = open === undefined;
  return (
    <nav ref={nav} className={cx('sn', isOpen && 'is-open', className)} aria-label={ariaLabel}
      onMouseEnter={live ? () => setHover(true) : undefined}
      onMouseLeave={live ? () => { if (!nav.current || !nav.current.contains(document.activeElement)) setHover(false); } : undefined}
      onFocus={live ? () => setHover(true) : undefined}
      onBlur={live ? (e) => { if (!nav.current || (!nav.current.contains(e.relatedTarget as Node) && !nav.current.matches(':hover'))) setHover(false); } : undefined}>
      {parts.indexOf('head') >= 0 && (
        <div className="sn-head">
          <button className="sn-toggle" type="button" aria-expanded={isOpen} aria-label={isOpen ? '收起导航' : '展开导航'} tabIndex={live ? undefined : -1}
            onClick={live ? () => setPinned(!pinned) : undefined}><span className="mark" /></button>
          <span className="sn-name">{name}</span>
        </div>
      )}
      {parts.indexOf('list') >= 0 && (
        <div ref={list} className="sn-list">
          <span className="sn-ind" aria-hidden="true" />
          {items.map((it, i) => 'group' in it
            ? <div key={'g' + i} className="sn-group" role="presentation"><span>{it.group}</span></div>
            : <a key={it.value} className={cx('sn-item', it.className)} href={it.href || '#'} aria-current={it.value === cur ? 'page' : undefined}
                onClick={(e) => { if (!it.href) e.preventDefault(); setCur(it.value); }}>
                <svg className="sn-ic" aria-hidden="true"><use href={'#' + it.icon} /></svg>
                {it.badge && <span className="badge" aria-label="有新内容" />}
                <span className="sn-tx">{it.label}</span>
              </a>)}
        </div>
      )}
      {tools && tools.length > 0 && parts.indexOf('tools') >= 0 && (
        <div className="sn-cap">
          {tools.map((t) => <button key={t.label} className="sn-cbtn" type="button" aria-label={t.label} onClick={t.onClick}><Icon name={t.icon} /><span className="sn-tx">{t.label}</span></button>)}
        </div>
      )}
    </nav>
  );
}
