// 서버를 만들기 위해 http 모듈 불러오기
const http = require('http');
// create함수를 통해 서버를 만들기 -> req, res 두개의 파라미터 필수
http.createServer((req, res) => {
    // 사용자가 서버에 접속하면 h1태그를 활용해서 응답을 진행
    // 200 통신성공, 400번대 -> 프론트 확인(요청), 500 -> 백엔드 확인(응답)
    // HTTP 응답 상태와 응답 데이터의 형식 정보를 담는다
    res.writeHead(200, {'content-type':'text/html; charset=utf-8'});

    let html = `
                <h1>접속환영</h1>
                <h2>접속환영</h2>
                <h3>접속환영</h3>
    
    `
    // 실제 응답 내용과, 응답의 종료 작성
    res.write(html);
    res.end();

}).listen(3004);

// 포트번호를 3004로 지정하여 서버를 실행