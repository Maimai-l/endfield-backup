export interface SelectorProps { name?: string; paging?: string; dots?: number; activeDot?: number; onPrev?: () => void; onNext?: () => void; onDot?: (i: number) => void; style?: React.CSSProperties }
export declare function Selector(props: SelectorProps): JSX.Element;
