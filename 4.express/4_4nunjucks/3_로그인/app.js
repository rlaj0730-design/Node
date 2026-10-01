// 모듈 불러오기
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const mainRouter = require('./routes/mainRouter');

// 넌적스 세팅
app.set('view engine', 'html');

nunjucks.configure('views', {
    express: app,
    watch: true
});


// express 안에있는 함수를 사용해서 post방식 처리(바디파서를 따로 설치하지 않아도 됨)
app.use(express.urlencoded({ extended: true })); 


// 라우터 등록
app.use('/', mainRouter);

app.listen(3000)