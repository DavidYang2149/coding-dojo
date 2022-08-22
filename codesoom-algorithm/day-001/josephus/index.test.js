const solution = require('./index');

test('Josephus', () => {
  expect(solution(7, 3)).toBe('<3, 6, 2, 7, 5, 1, 4>');
});
