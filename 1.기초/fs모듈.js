// http 모듈 사용해서 서버 생성하기 -> 포트번호는 3100번으로 지정
const http = require('http');

const fs = require('fs').promises; // fs모듈을 불러오고, promise를 활용해서 비동기 처리

http.createServer(async (req, res) => { // async를 활용해서 비동기 처리
    console.log('서버 확인')

    // 파일을 리턴(리턴.html)
    // async await => 비동기 통신 함수를 동기 형식처럼 작성할 수 있는 문법
    let html = await fs.readFile('./리턴.html'); // 이파일을 읽을때까지 기다리도록 처리하겠다.

    res.writeHead(200, {'content-type':'text/html; charset=utf-8'});
    res.write(html);
    res.end();

}).listen(3100);