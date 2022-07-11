const longestPalindrome = require('./index');

test('409', () => {
  expect(longestPalindrome('abccccdd')).toStrictEqual(7);
  expect(longestPalindrome('a')).toStrictEqual(1);
});
