export class ImmutableFenwickList {
  accumulations: number[];

  constructor(array: number[]) {
    this.accumulations = new Array(array.length).fill(0);
    for (let i = 0; i < array.length; ++i) {
      this.insert(i, array[i]);
    }
  }

  insert(i: number, element: number): void {
    for (; i < this.accumulations.length; i = (i | (i + 1))) {
      this.accumulations[i] += element;
    }
  }

  query(i: number): number {
    let s = 0;
    for (; i >= 0; i = (i & (i + 1)) - 1) {
      s += this.accumulations[i];
    }
    return s;
  }

  range(range: [number, number]) {
    const [from, to] = range;
    return this.query(to) - this.query(from - 1);
  }
}
