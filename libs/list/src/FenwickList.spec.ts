import {FenwickList} from './FenwickList';

test('FenwickList: exact query results', () => {
  const tree = new FenwickList([5, 1, 3, 2, 4]);
  expect(tree.query(1)).toEqual(5);
  expect(tree.query(3)).toEqual(9);
  expect(tree.query(5)).toEqual(15);
});

test('FenwickList: exact range results', () => {
  const tree = new FenwickList([1, 2, 3, 4, 5]);
  expect(tree.range([1, 5])).toEqual(15);
  expect(tree.range([1, 3])).toEqual(6);
  expect(tree.range([1, 1])).toEqual(1);
  expect(tree.range([4, 5])).toEqual(9);
});

test('FenwickList: joining range results', () => {
  const tree = new FenwickList([1, 2, 3, 4, 5]);
  expect(tree.range([1, 4])).toEqual(10);
  expect(tree.range([3, 4])).toEqual(7);
});
