const { solution, copy, match } = require('./index');

test('test', () => {
  const input = `
  xy0z
  zzz0yyy0xxx
  `;
  expect(solution(input)).toBe(10);
});

test('copy', () => {
  const input = 'abc';
  const result = ['abc', 'ab', 'bc', 'a', 'b', 'c'];
  
  expect(copy(input)).toStrictEqual(result);
});

test('match', () => {
  const input = 'abc';
  const content = 'aabccabc';
  const count = 0;
  
  expect(match(input, content, count)).toStrictEqual([['a', 'c'], 1]);
});
