export class FenwickList {
  n: number;
  bits: number[];

  constructor(array: number[]) {
    this.n = array.length + 1;
    this.bits = new Array(this.n).fill(0);

    for (let i = 1; i < this.n; ++i) {
      this.add(i - 1, array[i - 1]);
    }
  }

  add(i: number, delta: number): void {
    for (; i < this.n - 1; i = i | (i + 1)) {
      this.bits[i + 1] += delta;
    }
  }

  range(range: [number, number]): number {
    const [from, to] = range;
    return this.query(to) - this.query(from - 1);
  }

  query(i: number): number {
    let sum = 0;
    while (i !== 0) {
      sum += this.bits[i];
      i -= this.lsb(i);
    }
    return sum;
  }

  lsb(i: number): number {
    let c = 0;
    for (; i > 0 && (i & 1) !== 1; i >>= 1) {
      ++c;
    }
    return 2**c;
  }
}
