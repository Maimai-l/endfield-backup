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
    const fit = () => spx.forEach((x) => x.style.setProperty('--z', String(Math.min(1, x.clientWidth / +(x.dataset.w as string)))));
    fit();
    window.addEventListener('resize', fit);
    const t = root.querySelector<HTMLInputElement>('[data-sp-toggle]');
    const flip = () => root.querySelectorAll('.spx').forEach((x) => x.classList.toggle('is-marked', !!t && t.checked));
    if (t) t.addEventListener('change', flip);
    return () => { window.removeEventListener('resize', fit); if (t) t.removeEventListener('change', flip); };
  }, []);
  return <div ref={ref} dangerouslySetInnerHTML={{ __html: body }} />;
}
mount(<Page />);
