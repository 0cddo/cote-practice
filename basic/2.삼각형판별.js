// <풀이>
// 1. 두 변의 합이 남은 한 변 보다 커야한다
// 2. 세 수 a, b, c 의 수는 서로 다르다

// let total = a + b+ c
// if (a > b) {max = a }else max = b
// if (max <c) max = c
// max >= total - max ?answer : answer = 'NO'

function solution(a, b, c) {
  let answer = 'YES',
    max;
  let total = a + b + c;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (max < c) {
    max = c;
  }
  max <= total - max ? answer : (answer = 'NO');

  return answer;
}

console.log(solution(13, 33, 17));
