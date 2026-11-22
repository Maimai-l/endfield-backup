import * as React from 'react';
import { mount } from './_kit';
// @ts-expect-error 由构建以文本方式载入
import body from './Layout.html';

/* 版面样例：两张界面按 1280×720 绘制，随容器宽度等比缩放。 */
function Page() {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const root = ref.current!;
    const fit = () => root.querySelectorAll<HTMLElement>('.lay-fit').forEach((f) => f.style.setProperty('--k', String(f.clientWidth / 1280)));
    fit();
    window.addEventListener('resize', fit);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(fit) : null;
    if (ro) ro.observe(root);
    return () => { window.removeEventListener('resize', fit); if (ro) ro.disconnect(); };
  }, []);
  return <div ref={ref} dangerouslySetInnerHTML={{ __html: body }} />;
}
mount(<Page />);
