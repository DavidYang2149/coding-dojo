const solution = require('./index');

test('문자열 폭발', () => {
  expect(solution('mirkovC4nizCC44', 'C4')).toBe('mirkovniz');
  expect(solution('12ab112ab2ab', '12ab')).toBe('FRULA');
});
