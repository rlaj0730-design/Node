// 모듈 불러오기
const express = require('express')

const app = express()

// 페이지의 개수가 증가한다 -> app이 혼자 다 처리하기엔 관리가 힘들다 -> 그래서 경로에 관련된 건 router이 처리

// 모듈화된 경로 데이터 파일들 가져오기
const mainRouter = require('./routes/mainRouter')
const subRouter = require('./routes/subRouter')

// 컨트롤 타워(app)에게 알려주기 -> 메인경로로 들어오는 링크는 메인 라우터가 처리합니다~
app.use('/', mainRouter)
app.use('/minor', subRouter)
app.listen(3000)