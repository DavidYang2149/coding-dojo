/*

https://www.acmicpc.net/problem/2195
문자열 복사

문제
어떤 원본 문자열 S가 주어졌을 때, 이 문자열의 부분을 복사하여 P라는 새로운 문자열을 만들려고 한다. 복사를 할 때에는 copy(s, p) 이라는 함수를 이용하는데, 이는 S의 s번 문자부터 p개의 문자를 P에 복사해서 붙인다는 의미이다.

예를 들어 S="abaabba", P="aaabbbabbbaaa"인 경우를 생각해 보자. 이때는 copy(3, 2), copy(4, 3), copy(2, 2), copy(5, 2), copy(2, 3), copy(1, 1) 를 수행하여 P를 만들 수 있다. 각 단계별로 P는 "aa", "aaabb", "aaabbba", …와 같이 변하게 된다.

이와 같은 copy 연산을 이용하여 S에서 P를 만들려고 하는데, 이때 가능하면 copy 함수를 조금 사용하려고 한다.

S와 P가 주어졌을 때, 필요한 copy 함수의 최소 사용횟수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 S, 둘째 줄에 P가 주어진다. S와 P는 영어 대소문자와 숫자로만 되어 있다. S의 길이는 1,000을 넘지 않으며, P의 길이는 1,000을 넘지 않는다. copy함수만을 이용하여 S에서 P를 만들어낼 수 없는 경우는 입력으로 주어지지 않는다고 가정하자. 각 문자열은 최소한 한 개의 문자로 이루어져 있다.

출력
첫째 줄에 copy 함수의 최소 사용횟수를 출력한다.

*/

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const a = input[0];
// const b = input[1];

function copy(words) {
  const result = [];

  for (let i = 1; i <= words.length; i++) {
    for (let j = 0;  j + i <= words.length; j++) {
      result.push(words.substr(j, i));
    }
  }

  return result;
}

function match(keyword, contents, count = 0) {
  if (contents.length === 0) {
    return [contents, count];
  }
  
  // const before = JSON.parse(JSON.stringify(contents));
  
  // const result = contents.map(x => x.split(keyword)).flat().filter(x => x !== '');
  const result = contents.map(x => x.split(keyword)).flat().filter(x => x !== '');
  const resultCount = contents.reduce((acc, x) => acc + x.split(keyword).length - 1, 0);
  
  count += resultCount;
  // if (JSON.stringify(before) !== JSON.stringify(result)) {
  //   count += 1;
  // }
  
  return [result, count];
}

function solution(s, p) {
  let answer = 0;

  // S를 순차적으로 돌아서 P의 값을 제거한다.
  // 1. S를 가잔 긴 길이부터 점점 짧게 줄인다(loop)
  const keywords = copy(s);
  // console.log('keywords', keywords);

  // 2. P의 값과 일치하면 해당 값을 쪼갠다.
  keywords.reduce((cur, acc) => {
    // console.log('keyword: ', acc);
    // console.log('leftWords: ', cur);
    // console.log('answer: ', answer);
    const [leftWords, count] = match(acc, cur);
    answer += count;
    return leftWords;
  }, [p]);

  return answer;
}

// console.log(solution(a, b));

module.exports = { solution, copy, match };
