import {ImmutableFenwickList} from './ImmutableFenwickList';

test('ImmutableFenwickList: exact query results in unsorted array', () => {
  const tree = new ImmutableFenwickList([5, 1, 3, 2, 4]);
  expect(tree.query(1)).toEqual(6);
  expect(tree.query(2)).toEqual(9);
  expect(tree.query(4)).toEqual(15);
});

test('ImmutableFenwickList: exact query results in sorted array', () => {
  const tree = new ImmutableFenwickList([1, 2, 3]);
  expect(tree.query(0)).toEqual(1);
  expect(tree.query(2)).toEqual(6);
  expect(tree.query(1)).toEqual(3);
});

test('ImmutableFenwickList: exact range results', () => {
  const tree = new ImmutableFenwickList([1, 2, 3, 4, 5]);
  expect(tree.range([0, 4])).toEqual(15);
  expect(tree.range([0, 2])).toEqual(6);
  expect(tree.range([0, 0])).toEqual(1);
  expect(tree.range([3, 4])).toEqual(9);
});

test('ImmutableFenwickList: joining range results', () => {
  const tree = new ImmutableFenwickList([1, 2, 3, 4, 5]);
  expect(tree.range([0, 3])).toEqual(10);
  expect(tree.range([2, 3])).toEqual(7);
});
