const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

// 모듈화 한 파일들 불러오기(라우츠, 넌적스)
const mainRouter = require('./routes/mainRouter');

/*
    Template Engine(템플릿 엔진) : 화면을 보여주는 엔진
    종류 : ejs, nunjucks, pug 등등
    그중 넌적스의 장점 : HTML 코드 + JS코드
    템플릿을 가지고 자동으로 여러 페이지를 처리할 수 있다
*/

// 넌적스 세팅
app.set('view engine', 'html');
// -> view engine(화면을 보여주게 하는 엔진)을 html로 설정하겠다

nunjucks.configure('views', {
    // 동적인 html파일을 views폴더에서 찾아라
    // 객체 -> 지금 express 실행하는 주체 : app
    // watch : html파일이 변경되면 엔진이 알아서 처리하게끔 할건지
    express : app,
    watch : true
    // -> views 폴더를 기준으로 html 파일들을 찾겠다
    // -> watch : true -> html 파일이 바뀌면 서버 재시작 없이도 바로 반영되게 하겠다
})

app.use('/', mainRouter);

app.listen(3000)