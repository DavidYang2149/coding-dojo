/*
백준 

https://www.acmicpc.net/problem/18185
라면 사기 (Small)

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
0.5 초 (추가 시간 없음)	32 MB	2758	683	565	31.903%
문제
라면매니아 교준이네 집 주변에는 N개의 라면 공장이 있다. 각 공장은 1번부터 N번까지 차례대로 번호가 부여되어 있다. 교준이는 i번 공장에서 정확하게 Ai개의 라면을 구매하고자 한다(1 ≤ i ≤ N).

교준이는 아래의 세 가지 방법으로 라면을 구매할 수 있다.

i번 공장에서 라면을 하나 구매한다(1 ≤ i ≤ N). 이 경우 비용은 3원이 든다.
i번 공장과 (i+1)번 공장에서 각각 라면을 하나씩 구매한다(1 ≤ i ≤ N-1). 이 경우 비용은 5원이 든다.
i번 공장과 (i+1)번 공장, (i+2)번 공장에서 각각 라면을 하나씩 구매한다(1 ≤ i ≤ N-2). 이 경우 비용은 7원이 든다.
최소의 비용으로 라면을 구매하고자 할 때, 교준이가 필요한 금액을 출력하는 프로그램을 작성하시오.

입력
첫 번째 줄에 라면 공장의 개수를 의미하는 자연수 N가 주어진다.

두번째 줄에 N개의 정수 A1, ···, AN가 사이에 공백을 두고 주어진다.

출력
첫 번째 줄에 교준이가 필요한 최소 금액을 출력한다.

제한
모든 입력 데이터는 다음 조건을 만족한다.

3 ≤ N ≤ 104
0 ≤ Ai ≤ 104 (1 ≤ i ≤ N)

*/

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const a = parseInt(input[0]);
// const b = input[1].split(' ').map(x => parseInt(x));

function solution(a, b) {
  let answer = 0;

  return answer;
}

// console.log(solution(a, b));

module.exports = solution;
