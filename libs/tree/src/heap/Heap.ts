export interface Heap<T extends any> {
    heapify(i: number): void;
    indexOfParent(i: number): number;
    indexOfLeftChild(i: number): number;
    indexOfRightChild(i: number): number;
    insert(element: T): void;
    top(): T;
    head(): T;
    back(): T;
    tail(): T;
    show(): void;
    toArray(): T[];
}
