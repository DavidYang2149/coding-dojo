const isIsomorphic = require('./index');

test('205', () => {
  expect(isIsomorphic("egg", "add")).toBeTruthy();
  expect(isIsomorphic("foo", "bar")).toBeFalsy();
  expect(isIsomorphic("paper", "title")).toBeTruthy();
});
