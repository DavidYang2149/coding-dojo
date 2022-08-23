/*
https://www.acmicpc.net/problem/1966
프린터 큐

문제
여러분도 알다시피 여러분의 프린터 기기는 여러분이 인쇄하고자 하는 문서를 인쇄 명령을 받은 ‘순서대로’, 즉 먼저 요청된 것을 먼저 인쇄한다. 여러 개의 문서가 쌓인다면 Queue 자료구조에 쌓여서 FIFO - First In First Out - 에 따라 인쇄가 되게 된다. 하지만 상근이는 새로운 프린터기 내부 소프트웨어를 개발하였는데, 이 프린터기는 다음과 같은 조건에 따라 인쇄를 하게 된다.

현재 Queue의 가장 앞에 있는 문서의 ‘중요도’를 확인한다.
나머지 문서들 중 현재 문서보다 중요도가 높은 문서가 하나라도 있다면, 이 문서를 인쇄하지 않고 Queue의 가장 뒤에 재배치 한다. 그렇지 않다면 바로 인쇄를 한다.
예를 들어 Queue에 4개의 문서(A B C D)가 있고, 중요도가 2 1 4 3 라면 C를 인쇄하고, 다음으로 D를 인쇄하고 A, B를 인쇄하게 된다.

여러분이 할 일은, 현재 Queue에 있는 문서의 수와 중요도가 주어졌을 때, 어떤 한 문서가 몇 번째로 인쇄되는지 알아내는 것이다. 예를 들어 위의 예에서 C문서는 1번째로, A문서는 3번째로 인쇄되게 된다.

입력
첫 줄에 테스트케이스의 수가 주어진다. 각 테스트케이스는 두 줄로 이루어져 있다.

테스트케이스의 첫 번째 줄에는 문서의 개수 N(1 ≤ N ≤ 100)과, 몇 번째로 인쇄되었는지 궁금한 문서가 현재 Queue에서 몇 번째에 놓여 있는지를 나타내는 정수 M(0 ≤ M < N)이 주어진다. 이때 맨 왼쪽은 0번째라고 하자. 두 번째 줄에는 N개 문서의 중요도가 차례대로 주어진다. 중요도는 1 이상 9 이하의 정수이고, 중요도가 같은 문서가 여러 개 있을 수도 있다.

출력
각 테스트 케이스에 대해 문서가 몇 번째로 인쇄되는지 출력한다.
*/
function solution(n, m) {
  /*
  계획
  - 목표는 내가 알고 싶은 문서가 몇 번째로 인쇄되었는지를 확인하는 것
  - 인덱스는 0번째부터 N-1까지 있다
  - 배열 중에서 객체형으로 선언하기
  - 객체의 구성은 다음과 같다 { id: 0 ~ N-1 , importance: 1 ~ 9, isTarget: boolean }
  */

  const [length, targetPrint] = n.split(' ').map(x => Number.parseInt(x));

  // 1. 프린트 리스트 배열을 작성한다
  // 2. 추적해야할 문서를 마킹한다
  const printArray = m.split(' ').map((x, index) => { return { id: index, importance: Number.parseInt(x), isTarget: index === targetPrint } });
  let result = 0;

  // 3. 프린트를 시작한다
  while (true) {
    // 3-1. 자신보다 중요도가 높은 프린트를 찾는다
    const isMoreImportance = printArray.some(print => printArray[0].importance < print.importance);

    // 3-2-1. 있으면 뒤로 밀어낸다
    if (isMoreImportance) {
      const goBackToPrintLine = printArray.shift();
      printArray.push(goBackToPrintLine);
      continue;
    }
    
    // 3-2-2. 없으면 인쇄한다
    const printedDocument = printArray.shift();

    // 3-2-2-1. 인쇄 후 인쇄 횟수를 증가시킨다
    result += 1;

    // 3-2-2-2. 인쇄된 문서가 내가 추적하던 문서인지 확인한다
    // 3-2-2-3. 추적하던 문서면 작업을 종료하고, 아니면 작업을 계속한다
    if (printedDocument.isTarget) {
      break;
    }
  }

  return result;
}

module.exports = solution;
