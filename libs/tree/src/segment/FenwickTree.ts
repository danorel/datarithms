import {
  SegmentNode,
  SegmentTree,
} from './SegmentTree';

interface AccumulatorSegmentNode extends SegmentNode {
  accumulation: number;
}

class FenwickNode implements AccumulatorSegmentNode {
  accumulation: number;
  from: number;
  to: number;
  left: FenwickNode;
  right: FenwickNode;

  constructor(
      left: FenwickNode = null,
      right: FenwickNode = null,
      accumulation = 0,
      from = 0,
      to = 0,
  ) {
    this.left = left;
    this.right = right;
    this.accumulation = (left?.accumulation + right?.accumulation) || accumulation;
    this.from = left?.from || from;
    this.to = right?.to || to;
  }
}

export class FenwickTree<T extends number> implements SegmentTree {
  root: FenwickNode;

  constructor(array: T[]) {
    this.root = this.init(this.root, array, 0, array.length - 1);
  }

  init(
      node: FenwickNode,
      array: T[],
      left: number,
      right: number,
  ): FenwickNode {
    if (left > right) {
      return null;
    } else if (left === right) {
      return new FenwickNode(null, null, array[left], left, right);
    } else {
      const middle = left + Math.floor((right - left) / 2);

      const nodeLeft = this.init(node?.left, array, left, middle);
      const nodeRight = this.init(node?.right, array, middle + 1, right);

      node = new FenwickNode(nodeLeft, nodeRight);

      return node;
    }
  }

  range(range: [number, number]): number {
    const [from, to] = range;

    const dfs = function(node: FenwickNode): number {
      if (node === null) {
        return 0;
      } else {
        if (node.from === from && node.to === to) {
          return node.accumulation;
        } else if (node.from === from && node.to !== to) {
          return dfs(node.left);
        } else if (node.from !== from && node.to === to) {
          return dfs(node.right);
        } else {
          return 0;
        }
      }
    };

    return dfs(this.root);
  }

  query(i: number): number {
    return 0;
  }

  show(): void {
    let level = 0;

    const queue: FenwickNode[] = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let size = queue.length;

      while (size > 0) {
        const front = queue.shift();
        console.log(front);
        if (front !== null) {
          console.log(' '.repeat(level) + front.accumulation + ': [' + front.from + ':' + front.to + ']');
          queue.push(front?.left);
          queue.push(front?.right);
        }
        --size;
      }

      ++level;
    }
  }
}
