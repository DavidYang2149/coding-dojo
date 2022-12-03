const solution = require('./index');

test('단어 뒤집기 2', () => {
  expect(solution('baekjoon online judge')).toBe('noojkeab enilno egduj');
  expect(solution('<open>tag<close>')).toBe('<open>gat<close>');
  expect(solution('<ab cd>ef gh<ij kl>')).toBe('<ab cd>fe hg<ij kl>');
  expect(solution('one1 two2 three3 4fourr 5five 6six')).toBe('1eno 2owt 3eerht rruof4 evif5 xis6');
  expect(solution('<int><max>2147483647<long long><max>9223372036854775807')).toBe('<int><max>7463847412<long long><max>7085774586302733229');
  expect(solution('<problem>17413<is hardest>problem ever<end>')).toBe('<problem>31471<is hardest>melborp reve<end>');
  expect(solution('<   space   >space space space<    spa   c e>')).toBe('<   space   >ecaps ecaps ecaps<    spa   c e>');
});
