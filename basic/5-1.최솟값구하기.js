// <문제>
// 주어진 배열의 수 중 가장 작은 수를 출력

// <풀이>
// - 임의의 큰 수 만들어서 비교 -> Number.MAX_SAFE_INTEGER
// - 반복문 배열 돌림
// - 원소의 크기 비교

function solution(arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    answer > arr[i] ? (answer = arr[i]) : answer;
  }

  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
