import * as React from 'react';

/** 拼接类名，忽略空值。 */
export function cx(...parts: Array<string | number | boolean | null | undefined>): string {
  return parts.filter((p) => typeof p === 'string' && p).join(' ');
}

/** 受控与非受控两用的状态：传入 value 时由外部控制，否则使用 defaultValue 作为初始值。 */
export function useControllable<T>(value: T | undefined, defaultValue: T, onChange?: (v: T) => void): [T, (v: T) => void] {
  const [inner, setInner] = React.useState<T>(defaultValue);
  const controlled = value !== undefined;
  const current = controlled ? (value as T) : inner;
  const set = React.useCallback((v: T) => {
    if (!controlled) setInner(v);
    if (onChange) onChange(v);
  }, [controlled, onChange]);
  return [current, set];
}

/** 列表内的方向键移动焦点，跳过禁用项；Home、End 到首尾。 */
export function moveFocus(e: React.KeyboardEvent, box: HTMLElement | null, selector: string, prev: string[], next: string[]): HTMLElement | null {
  if (!box) return null;
  const items = Array.prototype.slice.call(box.querySelectorAll(selector)).filter((x: HTMLElement) =>
    !(x as HTMLButtonElement).disabled && !x.classList.contains('is-disabled') && x.getAttribute('aria-disabled') !== 'true') as HTMLElement[];
  const i = items.indexOf(document.activeElement as HTMLElement);
  if (i < 0) return null;
  let n: HTMLElement | null = null;
  if (next.indexOf(e.key) >= 0) n = items[(i + 1) % items.length];
  else if (prev.indexOf(e.key) >= 0) n = items[(i - 1 + items.length) % items.length];
  else if (e.key === 'Home') n = items[0];
  else if (e.key === 'End') n = items[items.length - 1];
  if (n) { e.preventDefault(); n.focus(); }
  return n;
}
