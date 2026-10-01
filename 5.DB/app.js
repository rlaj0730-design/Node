// 모듈 불러오기
const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const session = require('express-session')//세션 관리 기능을 불러온다.
const fileStore = require('session-file-store')(session)//세션을 파일에 저장할 수 있는 기능을 준비한다.
const mainRouter = require('./routes/mainRouter')
// post 처리를 위한 등록
app.use(express.urlencoded({ extended: true }))

// 넌적스 세팅
app.set('view engine', 'html')

nunjucks.configure('views', {
    express : app,
    watch : true
})

// 세션 관리 코드
// req.body는 이번 요청에서 클라이언트가 보내온 데이터이고, req.session은 여러 요청에 걸쳐 서버가 기억하고 싶은 사용자 상태를 다룰 때 사용하는 것
// Express 앱에서 세션 기능을 사용하도록 등록하고, 세션은 파일에 저장하도록 설정한다.
app.use(
    session({
        httpOnly : true, // 세션 ID가 담긴 쿠키를 브라우저 JavaScript에서 접근하지 못하도록 제한하는 보안 설정
        resave : false, // 세션 내용이 바뀌지 않았는데도 요청이 들어올 때마다 세션을 다시 저장할지를 결정
        secret : 'secret', // 세션 쿠키가 임의로 조작되는 것을 확인하는 데 사용하는 비밀키
        store : new fileStore(), // 세션을 저장하기 위한 저장소
        saveUninitialized : false // 세션에 저장할 내용이 없더라도 저장할건지? 여부
    })
)

// 라우터 등록
app.use('/', mainRouter)

app.listen(3000)
