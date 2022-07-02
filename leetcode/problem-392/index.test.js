const isSubsequence = require('./index');

test('392', () => {
  expect(isSubsequence("abc", "ahbgdc")).toBeTruthy();
  expect(isSubsequence("axc", "ahbgdc")).toBeFalsy();
});
