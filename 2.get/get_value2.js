// http모듈 활용 -> 서버생성(3001)
const http = require('http');
const url = require('url');
// 클라이언트 정보가 담겨 있는 곳 -> req -> method(get) -> url에 있는 데이터 확인하기
// --> 할려면 url모듈 활용
// require() -> 모듈 불러올 때 사용하는 명령어 
http.createServer((req, res) => {


// url안에 있는 정보를 확인
let qs = url.parse(req.url, true).query;

// 입력한 숫자2개, 연산기호 1개 -> 총 3개의 입력 데이터가 필요
// qs -> 객체형태를 지니고 있다 -> 객체안의 값을 접근(객체변수명.key)
let num1 = Number(qs.num1);
let num2 = Number(qs.num2);
let opr = qs.opr;
// 입력한 기호에 따라서 연산처리 -> 조건문을 통해서 연산처리
// +는 합, -는 감소
let result;
if (opr == '+'){
    result = num1 + num2  //let은 값 재할당이 가능함. let안쓰고 함수명 쓰면 됨. var이랑 const가 있음
}else if(opr == '-'){
    result = num1 - num2
}else if(opr == '*'){
    result = num1*num2
}else if(opr == '/'){
    result = num1 / num2
};
// 화면에 응답할 내용 -> 첫번째, 두번째 입력 값, 연산기호, 두 숫자의 연산 내용
res.writeHead(200, {'content-type':'text/html; charset=utf-8'});
res.write(`사용자가 보내는 첫번째 값 ${num1}<br>`)
res.write(`사용자가 보내는 두번째 값 ${num2}<br>`)
res.write(`연산 기호는 : ${opr}<br>`)
res.write(`연산 결과는 : ${result}`)
res.end()
}).listen(3001);