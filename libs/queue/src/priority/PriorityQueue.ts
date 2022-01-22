export interface PriorityQueue<T extends any> {
    enqueue(element: T, priority: number);
    dequeue(): T;
    front(): T;
    back(): T;
}

export type Comparator<T extends any> = (a: T, b: T) => boolean;
