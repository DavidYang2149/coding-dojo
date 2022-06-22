/*
백준 

거스름돈 다국어
https://www.acmicpc.net/problem/5585

문제
타로는 자주 JOI잡화점에서 물건을 산다.
JOI잡화점에는 잔돈으로 500엔, 100엔, 50엔, 10엔, 5엔, 1엔이 충분히 있고, 언제나 거스름돈 개수가 가장 적게 잔돈을 준다.
타로가 JOI잡화점에서 물건을 사고 카운터에서 1000엔 지폐를 한장 냈을 때, 받을 잔돈에 포함된 잔돈의 개수를 구하는 프로그램을 작성하시오.

입력
입력은 한줄로 이루어져있고, 타로가 지불할 돈(1 이상 1000미만의 정수) 1개가 쓰여져있다.

출력
제출할 출력 파일은 1행으로만 되어 있다. 잔돈에 포함된 매수를 출력하시오.

*/

// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// var a = parseInt(input[0]);

function solution(price) {
  let answer = 0;
  let money = 1000;
  let left = money - price;

  while (left !== 0) {
    if (left / 500 >= 1) {
      answer += parseInt(left / 500);
      left = left % 500;
    }
    
    if (left / 100 >= 1) {
      answer += parseInt(left / 100);
      left = left % 100;
    }

    if (left / 50 >= 1) {
      answer += parseInt(left / 50);
      left = left % 50;
    }

    if (left / 10 >= 1) {
      answer += parseInt(left / 10);
      left = left % 10;
    }

    if (left / 5 >= 1) {
      answer += parseInt(left / 5);
      left = left % 5;
    }

    if (left / 1 >= 1) {
      answer += parseInt(left / 1);
      left = left % 1;
    }
  }

  return answer;
}

module.exports = solution;

// console.log(solution(a));
