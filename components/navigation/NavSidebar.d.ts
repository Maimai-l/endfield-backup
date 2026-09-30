/** @startingPoint section="Endfield" subtitle="Fixed white sidebar nav with black indicator bar" viewport="700x200" */
export interface NavSidebarProps { items?: { key: "home" | "operator" | "lore" | "notice" | "calendar"; label: string }[]; activeIndex?: number; expanded?: boolean; height?: number; onSelect?: (i: number) => void; style?: React.CSSProperties }
export declare function NavSidebar(props: NavSidebarProps): JSX.Element;
