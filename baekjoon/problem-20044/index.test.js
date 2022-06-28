const solution = require('./index');

test('20044', () => {
  expect(solution(2, [1, 7, 5, 8])).toBe(9);
  expect(solution(3, [1, 7, 3, 5, 9, 2])).toBe(8);
});
