// * 프로그래머스 lv1 - 직사각형 별찍기

// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 제한 조건
// n과 m은 각각 1000 이하인 자연수입니다.

// <풀이>
// 0.  data를 split 해준 첫번째 원소는 괄호, 두번째 원소는 세로 값이다
// 1. a, b = '*' 문자 별이 되어야,,,
// 2. 배열의 원소 a = 가로 줄 갯수
// 3. 배열의 원소 b = 세로 줄 갯수

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    let star = '';
    for (let j = 0; j < a; j++) {
      star = star + '*';
    }
    console.log(star);
  }
  console.log(a);
  console.log(b);
});

// * 의문점
// - 왜 줄바꿈이 일어나는가?
