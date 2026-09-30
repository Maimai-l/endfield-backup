/** @startingPoint section="Endfield" subtitle="Round paging buttons in a striped capsule" viewport="700x200" */
export interface PaginationProps { dark?: boolean; current?: number; total?: number; onPrev?: () => void; onNext?: () => void; prevDisabled?: boolean; nextDisabled?: boolean; style?: React.CSSProperties }
export declare function Pagination(props: PaginationProps): JSX.Element;
