/** @startingPoint section="Endfield" subtitle="Subpage tabs with sliding text and arrow chip" viewport="700x200" */
export interface TabsProps { tabs?: string[]; activeIndex?: number; onSelect?: (i: number) => void; style?: React.CSSProperties }
export declare function Tabs(props: TabsProps): JSX.Element;
