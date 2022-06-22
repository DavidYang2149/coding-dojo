const solution = require('./index');

test('test', () => {
  const input = `
  xy0z
  zzz0yyy0xxx
  `;
  expect(solution(input)).toBe(10);
});
