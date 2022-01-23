import {MaxHeap} from 'tree';
import {Comparator, PriorityQueue} from './PriorityQueue';

export class MaxPriorityQueue<T extends any> implements PriorityQueue<T> {
  heap: MaxHeap<T>;
  comparator: Comparator<T>;

  constructor(array: T[], comparator: Comparator<T>) {
    this.comparator = comparator;
    this.heap = new MaxHeap(array);
  }

  enqueue(element: T, priority: number): void {

  }

  dequeue(): T {
    return null;
  }

  back(): T {
    return undefined;
  }

  front(): T {
    return undefined;
  }
}
