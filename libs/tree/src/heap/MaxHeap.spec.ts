import {MaxHeap} from './MaxHeap';

test('MaxHeap: initialize satisfies max heap and completeness rules', () => {
  const heap = new MaxHeap<number>([1, 2, 3, 4, 5]);
  expect(heap.nodes).toEqual([undefined, 5, 4, 3, 1, 2]);
});

test('MaxHeap: return and delete topmost element', () => {
  const heap = new MaxHeap<number>([1, 2, 3, 4, 5]);
  expect(heap.top()).toEqual(5);
  expect(heap.toArray()).toEqual([4, 2, 3, 1]);
  expect(heap.top()).toEqual(4);
  expect(heap.toArray()).toEqual([3, 2, 1]);
});

test('MaxHeap: return topmost element', () => {
  const heap = new MaxHeap<number>([1, 2, 3, 4, 5]);
  expect(heap.head()).toEqual(5);
  expect(heap.toArray()).toEqual([5, 4, 3, 1, 2]);
  expect(heap.head()).toEqual(5);
  expect(heap.toArray()).toEqual([5, 4, 3, 1, 2]);
});

test('MaxHeap: return and delete lowest element', () => {
  const heap = new MaxHeap<number>([1, 2, 3, 4, 5]);
  expect(heap.back()).toEqual(2);
  expect(heap.toArray()).toEqual([5, 4, 3, 1]);
  expect(heap.back()).toEqual(1);
  expect(heap.toArray()).toEqual([5, 4, 3]);
});

test('MaxHeap: return lowest element', () => {
  const heap = new MaxHeap<number>([1, 2, 3, 4, 5]);
  expect(heap.tail()).toEqual(2);
  expect(heap.toArray()).toEqual([5, 4, 3, 1, 2]);
  expect(heap.tail()).toEqual(2);
  expect(heap.toArray()).toEqual([5, 4, 3, 1, 2]);
});
