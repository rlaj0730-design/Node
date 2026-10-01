// 모듈 불러오기
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const mainRouter = require('./routes/mainRouter');

// nunjucks 세팅
app.set('view engine', 'html');
nunjucks.configure('views', {
    express : app, // 지금 express 실행하는 주체 : app
    watch : true // html파일이 바뀌면 서버 재시작 없이도 바로 반영되게 하겠다
})

app.use('/', mainRouter);
app.listen(3000)