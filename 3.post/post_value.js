// 모듈 불러오기
const http = require('http')
const qs = require('querystring')

// 서버 생성
http.createServer((req, res)=>{

    // 처리 방법(post)
    /// POST 방식으로 전달된 데이터를 body에 문자열로 누적(pw1=1234&pw2=1234같은 URL-encoded 형식의 문자열)
    // 데이터 수신이 끝나면 querystring 모듈을 이용해 객체 형태로 변환
    // 빈 문자열을 넣어둔 변수를 활용
    let body = ''

    req.on('data', (chunk)=>{
        // 'data'는 http서버가 요청의 본문(body) 데이터를 수신할 때 발생하는 이벤트
        // data 이벤트가 발생하고 -> 함수(핸들러)가 실행되는 구조
        console.log("넘어온 post 데이터", chunk);
        body += chunk;
        console.log('문자열로 변환한 데이터', body)
        /*슬래시 별표 두개는 장군주석임. 접을수 있음 
            body라는 빈 문자열을 생성하여 POST 요청의 데이터를 저장할 준비,
            클라이언트가 데이터를 전송할때마다 data이벤트가 발생,
            첫 번째 형식은 Buffer형식으로 지정,
            수신된 데이터를 매개변수를 활용해서 body변수에 누적,
            모든 데이터가 최종적으로 하나의 문자열로 처리

        */
    })

    // 사용자가 입력한 값을 수신, 누적이 끝나면 실행. 객체로 바꾸는중
    req.on('end', ()=>{
        // qs 모듈 활용
        let parseData = qs.parse(body)
        console.log('변환 데이터', parseData)

        // 실습) 입력받은 비밀번호 2개를 비교하여, 값이 같다면 비밀번호가 동일합니다
        // 값이 다르면 비밀번호가 다릅니다
        // 응답 형식 지정
        // 화면에 응답 -> res
        let pw1 = parseData.pw1;
        let pw2 = parseData.pw2;

        res.writeHead(200, {'content-type':'text/html; charset=utf-8'});
        
        if(pw1 == pw2){
            result = "<script>alert('비밀번호가 동일합니다')</script>"
            res.write(result)

        }else{
            result = "<h1>비밀번호가 다릅니다</h1>"
            res.write(result)
        }
        res.end()
    })
    
}).listen(3300)