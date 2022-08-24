const solution = require('./index');

test('괄호', () => {
  expect(solution('(())())')).toBe('NO');
  expect(solution('(((()())()')).toBe('NO');
  expect(solution('(()())((()))')).toBe('YES');
  expect(solution('((()()(()))(((())))()')).toBe('NO');
  expect(solution('()()()()(()()())()')).toBe('YES');
  expect(solution('(()((())()(')).toBe('NO');

  expect(solution('((')).toBe('NO');
  expect(solution('))')).toBe('NO');
  expect(solution('())(()')).toBe('NO');
});
