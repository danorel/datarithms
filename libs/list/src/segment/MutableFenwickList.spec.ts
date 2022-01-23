import {MutableFenwickList} from './MutableFenwickList';

test('MutableFenwickList: exact query results in unsorted array', () => {
  const tree = new MutableFenwickList([5, 1, 3, 2, 4]);
  expect(tree.query(1)).toEqual(6);
  expect(tree.query(2)).toEqual(9);
  expect(tree.query(4)).toEqual(15);
});

test('MutableFenwickList: exact query results in sorted array', () => {
  const tree = new MutableFenwickList([1, 2, 3]);
  expect(tree.query(0)).toEqual(1);
  expect(tree.query(2)).toEqual(6);
  expect(tree.query(1)).toEqual(3);
});

test('MutableFenwickList: exact range results', () => {
  const tree = new MutableFenwickList([1, 2, 3, 4, 5]);
  expect(tree.range([0, 4])).toEqual(15);
  expect(tree.range([0, 2])).toEqual(6);
  expect(tree.range([0, 0])).toEqual(1);
  expect(tree.range([3, 4])).toEqual(9);
});

test('MutableFenwickList: joining range results', () => {
  const tree = new MutableFenwickList([1, 2, 3, 4, 5]);
  expect(tree.range([0, 3])).toEqual(10);
  expect(tree.range([2, 3])).toEqual(7);
});

test('MutableFenwickList: add new element', () => {
  const tree = new MutableFenwickList([1, 2, 3, 4, 5]);
  expect(tree.range([0, 4])).toEqual(15);
  expect(tree.range([3, 4])).toEqual(9);
  tree.add(3);
  expect(tree.range([0, 5])).toEqual(18);
  expect(tree.range([3, 5])).toEqual(12);
});

test('MutableFenwickList: update old element', () => {
  const tree = new MutableFenwickList([1, 2, 3, 4, 5]);
  expect(tree.range([0, 4])).toEqual(15);
  expect(tree.range([3, 4])).toEqual(9);
  tree.update(1, 3);
  expect(tree.range([0, 4])).toEqual(16);
  expect(tree.range([3, 4])).toEqual(9);
  tree.update(2, 6);
  expect(tree.range([0, 4])).toEqual(19);
  expect(tree.range([3, 4])).toEqual(9);
});
