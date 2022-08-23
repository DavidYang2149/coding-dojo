const solution = require('./index');

test('printer-queue', () => {
  expect(solution('1 0', '5')).toBe(1);
  expect(solution('4 2', '1 2 3 4')).toBe(2);
  expect(solution('6 0', '1 1 9 1 1 1')).toBe(5);
});
