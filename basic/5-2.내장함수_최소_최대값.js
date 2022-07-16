// <문제>
// 내장함수로 최소값, 최대값 구하기

// <풀이>
// Math.min(), Math.max() 내장함수 이용
// 배열의 원소를 비교할 때는 배열을 스프레드 연산자(전개연산자)를 이용해 배열을 펼쳐줄 수 있도록 한다

function solution(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
}

let arr = [5, 2, 6, 7, 1];
