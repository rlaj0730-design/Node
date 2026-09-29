// http, url 모듈 불러오기
const http = require('http');
const url = require('url');

// http 모듈 내 create 함수 사용해서 서버 만들기 -> 포트번호는 3300번으로 지정
http.createServer((req, res) => { 
    console.log('접속 확인~')

    // parse() -> 사용자가 입력한 정보가 url을 통해 전달 -> 필요한 정보들만 가져오기
    let qs = url.parse(req.url, true).query; // true를 적용하면 객체형식으로 가져올 수 있음
    // qs -> 객체 형태를 반환 {num1 : 123, num2 : 456}
    console.log(qs.num1, qs.num2); // 브라우저에서 입력한 정보가 객체형식으로 출력됨

    // qs라는 객체 안에 값을 확인
    // 사용자가 입력한 값 => qs변수안에 있는 값들을 화면에 출력(응답)
    // 강제 형 변환(문자열 -> 숫자)
    let num1 = Number(qs.num1);
    let num2 = Number(qs.num2);
    // res라는 응답형식 => res.writeHead / res.write()
    res.writeHead(200, {'content-type':'text/html; charset=utf-8'});
    // 최종 응답 화면을 첫번째값, 두번째값, 두개 숫자의 합
    let html = `<h1>두 수의 합은 : ${num1 + num2}</h1>`
    res.write(`<h1>사용자가 보내는 첫번째 값 : ${num1}</h1>`);
    res.write(`<h1>사용자가 보내는 두번째 값 : ${num2}</h1>`);
    res.write(html);
    res.end();
}).listen(3300);