const runningSum = require('./index');

test('1480', () => {
  expect(runningSum([1,2,3,4])).toBe([1,3,6,10]);
  expect(runningSum([1,1,1,1,1])).toBe([1,2,3,4,5]);
  expect(runningSum([3,1,2,10,1])).toBe([3,4,6,16,17]);
});
