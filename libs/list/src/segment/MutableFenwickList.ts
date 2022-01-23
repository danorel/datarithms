export class MutableFenwickList {
  accumulations: number[];
  array: number[];

  constructor(array: number[]) {
    this.accumulations = new Array(array.length).fill(0);
    this.array = [...array];
    for (let i = 0; i < array.length; ++i) {
      this.insert(i, array[i]);
    }
  }

  add(element: number): void {
    this.accumulations.push(element);
    this.array.push(element);
    const last = this.accumulations.length - 1;
    for (let i = 0; i < this.accumulations.length; ++i) {
      if ((i | (i + 1)) === last) {
        this.accumulations[last] += this.accumulations[i];
      }
    }
  }

  insert(i: number, element: number): void {
    for (; i < this.accumulations.length; i = (i | (i + 1))) {
      this.accumulations[i] += element;
    }
  }

  update(i: number, element: number): void {
    const delta = this.array[i] - element;
    for (; i < this.accumulations.length; i = i | (i + 1)) {
      this.accumulations[i] -= delta;
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
