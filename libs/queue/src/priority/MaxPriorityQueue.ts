import {Comparator, PriorityQueue} from './PriorityQueue';

export class MaxPriorityQueue<T extends any> implements PriorityQueue<T> {
  nodes: T[];
  comparator: Comparator<T>;

  constructor(array: T[], comparator: Comparator<T>) {
    this.nodes = new Array<T>(array.length + 1);
    this.comparator = comparator;
    for (let i = 1; i < this.nodes.length; ++i) {
      this.nodes[i] = array[i - 1];
    }
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
