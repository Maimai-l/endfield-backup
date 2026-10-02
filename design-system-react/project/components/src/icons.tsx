import * as React from 'react';
import { ICONS, IconName } from './icons-data';
import { cx } from './util';

export type { IconName } from './icons-data';

/* 带动作的图标：加号悬停转 90 度、箭头悬停右移、刷新点击转一周、关闭悬停转 90 度。 */
const MOTION: Partial<Record<IconName, string>> = { 'i-plus': 'ic--plus', 'i-arrow-r': 'ic--arrow', 'i-refresh': 'ic--refresh', 'i-close': 'ic--close' };

/** 把全部图标写入页面一次，供 Icon 以 use 引用。组件包加载后自动调用。 */
export function mountSprite(): void {
  if (typeof document === 'undefined' || document.getElementById('ef-sprite') || !document.body) return;
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('id', 'ef-sprite');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('width', '0');
  svg.setAttribute('height', '0');
  svg.style.position = 'absolute';
  svg.innerHTML = (Object.keys(ICONS) as IconName[]).map((k) => '<symbol id="' + k + '" viewBox="' + ICONS[k][0] + '">' + ICONS[k][1] + '</symbol>').join('');
  document.body.insertBefore(svg, document.body.firstChild);
}

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
export function Icon({ name, size = 'md', still, className, style }: IconProps) {
  return (
    <svg className={cx('ic', size !== 'md' && 'ic--' + size, !still && MOTION[name], className)} style={style} aria-hidden="true">
      <use href={'#' + name} />
    </svg>
  );
}

