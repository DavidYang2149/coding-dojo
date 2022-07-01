const solution = require('./index');

test('18185', () => {
  expect(solution(3, [1, 0, 1])).toBe(6);
  expect(solution(5, [1, 1, 1, 0, 2])).toBe(13);
});
