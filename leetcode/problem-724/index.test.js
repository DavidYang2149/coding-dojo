const pivotIndex = require('./index');

test('724', () => {
  expect(pivotIndex([1, 7, 3, 6, 5, 6])).toStrictEqual(3);
  expect(pivotIndex([1, 2, 3])).toStrictEqual(-1);
  expect(pivotIndex([2, 1, -1])).toStrictEqual(0);
});
