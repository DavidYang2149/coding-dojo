const detectCycle = require('./index');

test('142', () => {
  expect(detectCycle([3,2,0,-4], 1)).toStrictEqual(1);
  expect(detectCycle([1, 2], 0)).toStrictEqual(0);
  expect(detectCycle([1], -1)).toStrictEqual('no cycle');
});
