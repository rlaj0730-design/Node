// var.js에 있는 odd와 even 가져오기
// 설정한 객체 데이터 가져올 때 -> 키를 변수처럼 활용 가능
let {one, two} = require('./var.js');

console.log(one);

// 터미널 경로 설정 방법(경로 잘 맞춰야 한다)
// cd./tab : 현재 위치를 기준
// cd../enter : 상위 경로로 접근
// Ctrl + C : 현재 구동중인 파일 실행을 멈춤

let num = 4;

let result = num%2 === 0 ? two : one;
console.log(result);