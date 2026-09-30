// 모듈 불러오기
const express = require('express')

// 이 코드는 express() 함수를 호출해서 Express 애플리케이션 객체를 만들고, 그 객체를 app 변수에 담는 것
const app = express()

const bp = require('body-parser')

// post방식을 활용할 때 사용을 하기 위한 모듈
// 클라이언트가 보낸 데이터를 최종데이터(객체)로 변환
app.use(bp.urlencoded({extended : true}))

// 정적파일 경로 등록(미들 웨어 등록)
app.use(express.static('public'))

// 메인페이지 접근
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/로그인.html')
})

// get방식 처리 (전송 눌렀을때 getLogin 경로 처리)
app.get('/getLogin' , (req, res) => {
    console.log('get 데이터 확인', req.url)
    // 기존에 사용했던 방식 -> url.parse(req.url, true).query를 사용했었음.

    // Express가 req.query라는 방식으로 URL의 ? 뒤 데이터를 꺼내도록 제공해주는 것
    console.log('쿼리데이터 변환', req.query)

    // 실습
    // 사용자가 입력한 id -> smhrd && 입력한 pw -> 1234 두개의 입력값이 일치할 때
    // 로그인 성공 페이지로 이동 / 일치하지 않는다면 실패 페이지로 이동
    // redirect메서드 사용하기
    let id = req.query.id
    let pw = req.query.pw
    if(id == 'smhrd' && pw == '1234'){
        res.redirect("/로그인성공.html")
    }else{
        res.redirect("/로그인실패.html")
    }
})

// post 방식 처리
app.post('/postLogin', (req, res) =>{
    console.log('포스트 방식 확인')
    // 기존 방식 -> post형식은 데이터가 숨겨져서 넘어온다. -> 기존 Node -> buffer데이터를 문자열로 반환 -> 객체로 변환
    // express방식 -> body로 post형식 데이터 처리
    console.log('post 데이터 확인', req.body)

    if(req.body.id == "smhrd"&& req.body.pw == "1234"){
        res.redirect('/로그인성공.html')
    }else{
        res.redirect('/로그인실패.html')
    }
})

// 포트번호 등록
app.listen(3000)
