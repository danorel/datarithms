import {Heap} from './Heap';

/**
 * Algorithm:
 * Input         heapify       Output
 * [1, 2, 3, 4, 5] => [5, 4, 3, 2, 1]
 *
 *            Data view:
 *      1                   5
 *    2   3        =>     4   3
 *  4   5               2   1
 *
 * Heapify:
 * Input         heapify      Output    Index
 * [1, 2, 3, 4 ,5] => [1, 2, 3, 4, 5]   (i=2)
 * [1, 2, 3, 4 ,5] => [1, 5, 3, 4, 2]   (i=1)
 * [1, 5, 3, 4, 2] => [5, 4, 3, 1, 2]   (i=0)
 */
export class MaxHeap<T extends any> implements Heap<T> {
  nodes: T[];

  constructor(array: T[]) {
    this.nodes = new Array<T>(array.length + 1);
    for (let i = 1; i <= array.length; ++i) {
      this.nodes[i] = array[i - 1];
    }

    for (let i = this.nodes.length / 2; i >= 1; --i) {
      this.heapify(i);
    }
  }

  heapify(parent: number) {
    let largest = parent;

    const left = this.indexOfLeftChild(parent);
    const right = this.indexOfRightChild(parent);

    if (this.nodes[largest] < this.nodes[left]) {
      largest = left;
    }

    if (this.nodes[largest] < this.nodes[right]) {
      largest = right;
    }

    if (largest !== parent) {
      [this.nodes[largest], this.nodes[parent]] = [this.nodes[parent], this.nodes[largest]];
      this.heapify(largest);
    }
  }

  indexOfParent(i: number): number {
    return i / 2;
  }

  indexOfLeftChild(i: number): number {
    return 2 * i;
  }

  indexOfRightChild(i: number): number {
    return 2 * i + 1;
  }

  insert(element: T): void {
    this.nodes.push(element);
    for (let i = this.nodes.length / 2; i >= 1; --i) {
      this.heapify(i);
    }
  }

  head(): T {
    return this.nodes[1];
  }

  top(): T {
    const topmost = this.nodes[1];
    this.nodes[1] = this.nodes.pop();
    this.heapify(1);
    return topmost;
  }

  tail(): T {
    return this.nodes[this.nodes.length - 1];
  }

  back(): T {
    return this.nodes.pop();
  }

  show(): void {
    let level = 0;

    const queue: T[] = [];
    queue.push(this.nodes[1]);

    while (queue.length > 0) {
      let size = queue.length;

      while (size > 0) {
        const top = queue.shift();
        console.log(' '.repeat(level) + top);
        --size;
      }

      ++level;
    }
  }

  toArray() {
    return this.nodes.slice(1);
  }
}
