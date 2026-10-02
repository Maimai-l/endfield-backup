import * as React from 'react';
import { Icon, IconName } from './icons';
import { cx, moveFocus, useControllable } from './util';
import type { ControlSize } from './actions';

/* ---------- 复选框与单选框 ---------- */

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
export function Checkbox({ indeterminate, error, size = 'md', className, children, ...rest }: CheckboxProps) {
  const ref = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => { if (ref.current) ref.current.indeterminate = !!indeterminate; }, [indeterminate]);
  return (
    <label className={cx('check', size === 'lg' && 'check--lg', error && 'is-error', className)}>
      <input {...rest} ref={ref} type="checkbox" />
      <span className="box"><Icon name="i-check" className="tick" /><Icon name="i-minus" className="mix" /></span>
      {children}
    </label>
  );
}

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  error?: boolean;
  size?: 'md' | 'lg';
  children?: React.ReactNode;
}

/** 单选框，同一组内用相同的 name。 */
export function Radio({ error, size = 'md', className, children, ...rest }: RadioProps) {
  return (
    <label className={cx('check radio', size === 'lg' && 'check--lg', error && 'is-error', className)}>
      <input {...rest} type="radio" /><span className="box" />{children}
    </label>
  );
}

export interface OptionGroupProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  /** 组标题。 */
  legend: React.ReactNode;
}

/** 复选框或单选框的分组，纵向排列，带组标题。 */
export function OptionGroup({ legend, className, children, ...rest }: OptionGroupProps) {
  return <fieldset {...rest} className={cx('opt-group', className)}><legend>{legend}</legend>{children}</fieldset>;
}

/* ---------- 开关 ---------- */

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** md 36×20（默认），lg 44×24。 */
  size?: 'md' | 'lg';
  /** 提交中：显示加载圈并禁止切换。 */
  loading?: boolean;
  children?: React.ReactNode;
}

/** 立即生效的二元设置；文字说明开关作用。 */
export function Switch({ size = 'md', loading, disabled, className, children, ...rest }: SwitchProps) {
  return (
    <label className={cx('switch', size === 'lg' && 'switch--lg', loading && 'is-loading', className)}>
      <input {...rest} type="checkbox" role="switch" disabled={disabled || loading} />
      <span className="track" />{children}
    </label>
  );
}

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
export function VerticalSwitch({ checked, defaultChecked, onChange, disabled, size = 'md', options, label, className }: VerticalSwitchProps) {
  const [on, setOn] = useControllable<boolean>(checked, !!defaultChecked, onChange);
  return (
    <div className={cx('vsfield', className)}>
      <button className={cx('vswitch', size === 'lg' && 'vswitch--lg')} type="button" role="switch" aria-checked={on} aria-label={label} disabled={disabled}
        onClick={() => setOn(!on)} />
      <span className="vs-opts" aria-hidden="true"><span>{options[0]}</span><span>{options[1]}</span></span>
    </div>
  );
}

/* ---------- 输入框 ---------- */

interface FieldShellProps {
  id: string;
  label?: React.ReactNode;
  required?: boolean;
  help?: React.ReactNode;
  error?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  helpExtra?: React.ReactNode;
}

function FieldShell({ id, label, required, help, error, className, style, children, helpExtra }: FieldShellProps) {
  const err = typeof error === 'string' || React.isValidElement(error) ? error : null;
  return (
    <div className={cx('field', className)} style={style}>
      {label && <label className="field-label" htmlFor={id}>{label}{required && <span className="req">必填</span>}</label>}
      {children}
      {err ? <div className="field-help field-err" id={id + '-help'}><Icon name="s-error" />{err}</div>
        : (help || helpExtra) ? <div className="field-help" id={id + '-help'}>{help}{helpExtra}</div> : null}
    </div>
  );
}

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
export function TextField({ label, required, help, error, icon, clearable, unit, filled, size = 'md', style, className, state, id, value, defaultValue, onChange, disabled, readOnly, ...rest }: TextFieldProps) {
  const auto = React.useId();
  const fid = id || 'tf' + auto.replace(/:/g, '');
  const [val, setVal] = useControllable<string>(value as string | undefined, (defaultValue as string) || '', undefined);
  const ref = React.useRef<HTMLInputElement>(null);
  const box = (
    <div className={cx('input', size !== 'md' && 'input--' + size, filled && 'input--filled', error && 'is-error', disabled && 'is-disabled', readOnly && 'is-readonly', state && 'is-' + state, !label && !help && className)}
      style={!label && !help ? style : undefined}>
      {icon && <Icon name={icon} />}
      <input {...rest} ref={ref} id={fid} value={val} disabled={disabled} readOnly={readOnly}
        aria-invalid={error ? true : undefined} aria-describedby={label || help || (error && error !== true) ? fid + '-help' : undefined}
        onChange={(e) => { setVal(e.target.value); if (onChange) onChange(e); }} />
      {clearable && val && <button className="clear" type="button" aria-label="清除" onClick={() => { setVal(''); if (ref.current) ref.current.focus(); }}><Icon name="i-close" /></button>}
      {unit && <span className="unit">{unit}</span>}
    </div>
  );
  if (!label && !help && (!error || error === true)) return box;
  return <FieldShell id={fid} label={label} required={required} help={help} error={error === true ? null : error} className={className} style={style}>{box}</FieldShell>;
}

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  required?: boolean;
  help?: React.ReactNode;
  error?: boolean | React.ReactNode;
  /** 外层宽度等样式。 */
  style?: React.CSSProperties;
}

/** 多行输入框，圆角 16；设置 maxLength 时右下角显示计数。 */
export function TextArea({ label, required, help, error, style, className, id, value, defaultValue, onChange, maxLength, ...rest }: TextAreaProps) {
  const auto = React.useId();
  const fid = id || 'ta' + auto.replace(/:/g, '');
  const [val, setVal] = useControllable<string>(value as string | undefined, (defaultValue as string) || '', undefined);
  const count = maxLength ? <span className="count">{val.length}/{maxLength}</span> : null;
  return (
    <FieldShell id={fid} label={label} required={required} help={maxLength ? <span>{help}</span> : help} helpExtra={count} error={error === true ? null : error} className={className} style={style}>
      <div className={cx('input input--area', error && 'is-error')}>
        <textarea {...rest} id={fid} value={val} maxLength={maxLength} aria-invalid={error ? true : undefined} aria-describedby={fid + '-help'}
          onChange={(e) => { setVal(e.target.value); if (onChange) onChange(e); }} />
      </div>
    </FieldShell>
  );
}

/* ---------- 下拉选择 ---------- */

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

function flat(options: Array<SelectOption | SelectGroup>): SelectOption[] {
  const out: SelectOption[] = [];
  options.forEach((o) => { if ('group' in o) out.push(...o.options); else out.push(o); });
  return out;
}

/** 单选下拉框，全圆角；菜单圆角 16。 */
export function Select({ options, value, defaultValue, onChange, placeholder = '请选择', label, help, error, disabled, loading, searchable, size = 'md', defaultOpen, inline, ariaLabel, style, className }: SelectProps) {
  const auto = React.useId();
  const id = 'sel' + auto.replace(/:/g, '');
  const [cur, setCur] = useControllable<string | undefined>(value, defaultValue, onChange as ((v: string | undefined) => void) | undefined);
  const [open, setOpen] = React.useState(!!defaultOpen);
  const [q, setQ] = React.useState('');
  const box = React.useRef<HTMLDivElement>(null);
  const trig = React.useRef<HTMLButtonElement>(null);
  const menu = React.useRef<HTMLDivElement>(null);
  const picked = flat(options).find((o) => o.value === cur);

  React.useEffect(() => {
    if (!open || inline) return;
    const off = (e: MouseEvent) => { if (box.current && !box.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('click', off);
    const s = menu.current && menu.current.querySelector<HTMLElement>('[aria-selected="true"]');
    if (s && !searchable) s.focus();
    return () => document.removeEventListener('click', off);
  }, [open, inline, searchable]);

  const match = (o: SelectOption) => !q || (o.label + ' ' + (o.meta || '')).toLowerCase().indexOf(q.toLowerCase()) >= 0;
  const item = (o: SelectOption) => {
    const sel = o.value === cur;
    return (
      <button key={o.value} className={cx('menu-item', o.disabled && 'is-disabled')} type="button" role="option" aria-selected={sel} aria-disabled={o.disabled || undefined}
        onClick={() => { if (o.disabled) return; setCur(o.value); if (!inline) { setOpen(false); if (trig.current) trig.current.focus(); } }}>
        {o.label}{o.meta && !sel ? <span className="meta">{o.meta}</span> : <Icon name="i-check" className="ok" />}
      </button>
    );
  };
  const list = options.map((o) => 'group' in o
    ? (o.options.some(match) ? <React.Fragment key={'g' + o.group}><div className="menu-group">{o.group}</div>{o.options.filter(match).map(item)}</React.Fragment> : null)
    : (match(o) ? item(o) : null));

  const trigger = loading
    ? <div className={cx('input select', size !== 'md' && 'input--' + size)} style={inline ? { width: '100%' } : undefined} aria-busy="true"><span className="val ph">{loading}</span><span className="spin spin--track" aria-hidden="true" /></div>
    : <button ref={trig} className={cx('input select', size !== 'md' && 'input--' + size, error && 'is-error', disabled && 'is-disabled')} type="button" disabled={disabled}
        aria-haspopup="listbox" aria-expanded={open} aria-labelledby={label ? id + '-l' : undefined} aria-label={label ? undefined : ariaLabel}
        onClick={() => setOpen(!open)}>
        <span className={cx('val', !picked && 'ph')}>{picked ? picked.label : placeholder}</span><Icon name="i-tri-d" className="tri" />
      </button>;

  const dd = (
    <div ref={box} className={inline ? undefined : 'dd'} style={inline ? { display: 'grid', gap: 8 } : style}
      onKeyDown={(e) => { if (e.key === 'Escape' && open && !inline) { setOpen(false); if (trig.current) trig.current.focus(); } else moveFocus(e, menu.current, '.menu-item', ['ArrowUp'], ['ArrowDown']); }}>
      {trigger}
      <div ref={menu} className="menu" role="listbox" hidden={!open} style={inline ? { width: '100%' } : undefined}>
        {searchable && <div className="input input--sm menu-search"><Icon name="i-search" /><input aria-label="搜索选项" value={q} onChange={(e) => setQ(e.target.value)} /></div>}
        {list}
      </div>
    </div>
  );
  if (!label && !help && (!error || error === true)) return inline ? <div className={className} style={{ width: '100%', ...style }}>{dd}</div> : dd;
  return (
    <div className={cx('field', className)} style={inline ? style : undefined}>
      {label && <span className="field-label" id={id + '-l'}>{label}</span>}
      {dd}
      {error && error !== true ? <div className="field-help field-err"><Icon name="s-error" />{error}</div> : <div className="field-help">{help}</div>}
    </div>
  );
}

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
export function MultiSelect({ options, value, defaultValue, onChange, placeholder = '请选择', maxTags = 2, ariaLabel, style, className }: MultiSelectProps) {
  const [cur, setCur] = useControllable<string[]>(value, defaultValue || [], onChange);
  const [open, setOpen] = React.useState(false);
  const box = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (!open) return;
    const off = (e: MouseEvent) => { if (box.current && !box.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('click', off);
    return () => document.removeEventListener('click', off);
  }, [open]);
  const label = (v: string) => (options.find((o) => o.value === v) || { label: v }).label;
  const shown = cur.slice(0, maxTags);
  return (
    <div ref={box} className={cx('dd', className)} style={style} onKeyDown={(e) => { if (e.key === 'Escape') setOpen(false); }}>
      <div className="input select multi" style={{ width: '100%' }} role="combobox" aria-expanded={open} aria-label={ariaLabel} tabIndex={0}
        onClick={(e) => { if (!(e.target as HTMLElement).closest('.rm')) setOpen(!open); }}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(!open); } }}>
        {cur.length === 0 && <span className="val ph">{placeholder}</span>}
        {shown.map((v) => <span key={v} className="tag tag--sm">{label(v)}<button className="rm" type="button" aria-label={'移除 ' + label(v)} onClick={() => setCur(cur.filter((x) => x !== v))}><Icon name="i-close" /></button></span>)}
        {cur.length > maxTags && <span className="tag tag--sm">另 {cur.length - maxTags} 项</span>}
        <Icon name="i-tri-d" className="tri" style={{ marginLeft: 'auto' }} />
      </div>
      <div className="menu" role="listbox" aria-multiselectable="true" hidden={!open}>
        {options.map((o) => {
          const sel = cur.indexOf(o.value) >= 0;
          return <button key={o.value} className={cx('menu-item', o.disabled && 'is-disabled')} type="button" role="option" aria-selected={sel} aria-disabled={o.disabled || undefined}
            onClick={() => { if (o.disabled) return; setCur(sel ? cur.filter((x) => x !== o.value) : cur.concat(o.value)); }}>
            {o.label}<Icon name="i-check" className="ok" />
          </button>;
        })}
      </div>
    </div>
  );
}
