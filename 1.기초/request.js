// 브라우저에서 접속한 사용자의 ip를 체크

// http내장 모듈을 불러오기
const http = require('http');

// npm활용 외장 모듈 불러오기
const user_ip = require('request-ip');

// http내장 모듈을 통해 서버를 생성하는 함수 적용 -> 콜백 구조 적용
// req : 브라우저에서 요청한 정보, res : 서버에서 브라우저로 응답할 정보
// req : 접속시간, 접속장소, ip, 데이터 등이 담겨있음
http.createServer((req, res) => {

    let ip = user_ip.getClientIp(req);
    console.log(ip);
    // http://localhost:3000 접속 시 브라우저에 ip주소를 출력 -> ::1 형식으로 출력된다.

}).listen(3000);

// 127.0.0.1 = localhost