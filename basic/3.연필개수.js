// <문제>
// 연필 1다스 12자루, 학생 1인당 연필 1자루씩 나누어줌 N명의 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램 작성

// <풀이>
// Math.ceil() 무조건 올림
// 학생 22명 연필 1다스는 12자루 -> 22/ 12 -> 무조건 올린다

function solution(n) {
  let answer;
  answer = Math.ceil(n / 12);

  return answer;
}

console.log(solution(178));
