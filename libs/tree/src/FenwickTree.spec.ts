import {FenwickTree} from './FenwickTree';

test('FenwickTree: exact range results', () => {
  const tree = new FenwickTree([1, 2, 3, 4, 5]);
  expect(tree.range([0, 4])).toEqual(15);
  expect(tree.range([0, 2])).toEqual(6);
  expect(tree.range([0, 0])).toEqual(1);
  expect(tree.range([3, 4])).toEqual(9);
});

test('FenwickTree: joining range results', () => {
  const tree = new FenwickTree([1, 2, 3, 4, 5]);
  expect(tree.range([0, 3])).toEqual(11);
  expect(tree.range([2, 3])).toEqual(7);
});
