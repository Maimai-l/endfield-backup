/* ENDFIELD 设计系统 React 组件。全部组件挂在 window.Endfield 上；样式来自 bundle.css，颜色来自 tokens。 */
import { mountSprite } from './icons';

export { Icon, mountSprite } from './icons';
export { ICONS } from './icons-data';
export type { IconName, IconProps } from './icons';
export * from './actions';
export * from './forms';
export * from './navigation';
export * from './display';
export * from './feedback';

/* 图标雪碧图在文档就绪后写入一次；刷新图标在按钮点击时转一周。 */
if (typeof document !== 'undefined') {
  if (document.body) mountSprite();
  else document.addEventListener('DOMContentLoaded', mountSprite);
  document.addEventListener('click', (e) => {
    const b = (e.target as Element).closest && (e.target as Element).closest('button');
    const ic = b && b.querySelector('.ic--refresh');
    if (!ic) return;
    ic.classList.remove('is-turning');
    void ic.getBoundingClientRect();
    ic.classList.add('is-turning');
  });
  document.addEventListener('animationend', (e) => {
    const t = e.target as Element;
    if (t.classList && t.classList.contains('is-turning')) t.classList.remove('is-turning');
  });
}
