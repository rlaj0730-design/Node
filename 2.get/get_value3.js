// 모듈 불러오기 : http, url, fs
// require('fs').promises

// create 서버 생성 : port 번호 3100번
const http = require('http');
const url = require('url');
const fs = require('fs').promises;

http.createServer(async(req, res) => {
    // async await -> 해당 함수가 비동기 함수임을 선언
    
    // get방식으로 데이터를 전송할 때 url에 담겨 전달
    let qs = url.parse(req.url, true).query;
    console.log(qs)
    // 콘솔에 찍힌 값 가져오기
    let id = qs.id
    let pw = qs.pw

    // 화면에 응답내용 작성하기 -> 파일을 활용
    res.writeHead(200, {'content-type':'text/html; charset=utf-8'});
    // 사용자가 입력한 id, pw가 일치할때는 성공페이지, 일치하지 않을땐 실패 페이지 
    // and연산자를 활용
    if(id == 'smhrd' && pw == '1234'){
        let succes = await fs.readFile('./로그인성공.html')
        res.write(succes);
    }else{
        let fail = await fs.readFile('./로그인실패.html')
        res.write(fail)
    }

    res.end()
}).listen(3100);