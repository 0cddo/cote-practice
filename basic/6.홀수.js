// <문제>
// 7개의 자연수 중, 홀수인 자연수들을 골라 합을 구한다,
// 고른 홀수들 중 최소값을 찾는다

// <풀이>
// 1. 홀수 구하기
// 1-1. 홀수들의 합 구하기
// 2. 홀수 중 최소값을 찾기

// function solution(arr) {
//   let answer = [];
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//       answer.push(arr[i]);
//     }
//   }
//   for (let j = 0; j < answer.length; j++) {
//     sum += answer[j];
//   }
//   let min = Math.min(...answer);
//   return console.log(sum, min);
// }

// arr = [12, 77, 38, 41, 53, 92, 85];
// console.log(solution(arr));

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      answer.push(arr[i]);
    }
  }
  let sum = 0;
  for (let j = 0; j < answer.length; j++) {
    sum += answer[j];
  }
  let min;
  min = Math.min(...answer);

  return console.log(sum, min);
}
