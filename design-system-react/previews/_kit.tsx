/* 预览的排版辅助：舞台、行、条目与说明文字。组件一律取自 window.Endfield。 */
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import type * as EF from '../project/components/src/index';

export const E = (window as unknown as { Endfield: typeof EF }).Endfield;

export function mount(node: React.ReactNode): void {
  createRoot(document.getElementById('root') as HTMLElement).render(node);
}

/** 右上角“新增”标记：表示该组件为源站之外新增。 */
export function Prov() {
  return <span className="prov">新增</span>;
}

export function Stage({ children, prov }: { children: React.ReactNode; prov?: boolean }) {
  return <>{prov && <Prov />}<div className="stage">{children}</div></>;
}

export function Row({ label, children, style }: { label: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return <div className="row"><span className="row-label">{label}</span><div className="items" style={style}>{children}</div></div>;
}

export function Item({ cap, children, style }: { cap?: React.ReactNode; children?: React.ReactNode; style?: React.CSSProperties }) {
  return <div className="item" style={style}>{children}{cap !== undefined && <span className="cap">{cap}</span>}</div>;
}

export function Cap({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <span className="cap" style={style}>{children}</span>;
}
