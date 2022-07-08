// * 프로그래머스 lv1 - 제일 작은 수 제거하기

// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

// 0. 배열
const arr = [4, 3, 2, 1];

// 1. 최소값을 구한다
function small(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }
  return min;
}

// 2. 배열 원소가 1개일 경우 [-1] 리턴
function solution(arr) {
  var answer = [];
  if (arr.length === 1) {
    answer.push(-1);
  }
  return answer;
}

// 3. 구한 최소값을 제외한 배열을 생성
arr.filter((a) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    min > arr[i] ? (min = arr[i]) : min;
  }
  return a !== min;
});

// 4. 합치자function
function solution(arr) {
  var answer = [];
  if (arr.length <= 1) {
    answer.push(-1);
  } else {
    let removedMin = arr.filter((a) => {
      let min = arr[0];
      for (let i = 0; i < arr.length; i++) {
        min > arr[i] ? (min = arr[i]) : min;
      }
      return a !== min;
    });
    answer = removedMin;
  }
  return answer;
}

// * 추가 ) 배열 내부에서 원소끼리 크기 비교해보기
// 디버깅 연습하기

// * 문제발생 / 해결
// - filter 함수는 변수에 넣어줘야한다
// - 함수는 return 으로 실행시켜줘야한다!!!
