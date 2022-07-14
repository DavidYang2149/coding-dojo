const search = require('./index');

test('704', () => {
  expect(search([-1,0,3,5,9,12], 9)).toStrictEqual(4);
  expect(search([-1,0,3,5,9,12], 2)).toStrictEqual(-1);
});
