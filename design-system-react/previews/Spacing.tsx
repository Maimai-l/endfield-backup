import * as React from 'react';
import { mount } from './_kit';
// @ts-expect-error 由构建以文本方式载入
import body from './Spacing.html';

/* 间距说明页：示意图按容器宽度等比缩放；开关切换间距标注。 */
function Page() {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const root = ref.current!;
    const spx = Array.prototype.slice.call(root.querySelectorAll('.spx[data-w]')) as HTMLElement[];
    const fit = () => spx.forEach((x) => { const w = +(x.dataset.w as string), z = Math.min(1, x.clientWidth / w), inner = x.querySelector('.spx-z') as HTMLElement; x.style.setProperty('--sw', String(w)); x.style.setProperty('--z', String(z)); x.style.setProperty('--sh', inner.offsetHeight * z + 'px'); });
    fit();
    window.addEventListener('resize', fit);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(fit) : null;
    if (ro) spx.forEach((x) => ro.observe(x.querySelector('.spx-z') as HTMLElement));
    const t = root.querySelector<HTMLInputElement>('[data-sp-toggle]');
    const flip = () => root.querySelectorAll('.spx').forEach((x) => x.classList.toggle('is-marked', !!t && t.checked));
    if (t) t.addEventListener('change', flip);
    return () => { window.removeEventListener('resize', fit); if (ro) ro.disconnect(); if (t) t.removeEventListener('change', flip); };
  }, []);
  return <div ref={ref} dangerouslySetInnerHTML={{ __html: body }} />;
}
mount(<Page />);
