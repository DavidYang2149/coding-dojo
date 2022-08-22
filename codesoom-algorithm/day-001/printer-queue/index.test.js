const solution = require('./index');

test('printer-queue', () => {
  expect(solution()).toBe(1);
  expect(solution()).toBe(2);
  expect(solution()).toBe(5);
});
