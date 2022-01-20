export interface SegmentNode {
    from: number;
    to: number;
    left: SegmentNode;
    right: SegmentNode;
}

export interface SegmentTree<T = any> {
    root: SegmentNode;
    init(node: SegmentNode, array: T[], left: number, right: number): SegmentNode;
    range(range: [number, number]): T;
    query(i: number): T;
    show(): void;
}
