// confog 폴더는 db관련된 파일을 저장할때 사용한다.
// public 폴더는 정적페이지 파일을 저장할때 많이 사용한다.(html, css, 이미지 등등)
// routes 폴더는 경로와 관련된 파일을 저장할때 많이 사용한다.

// express -> 서버의 컨트롤 타워(서버 생성, 미들웨어 등록, 전체적인 흐름을 연결)

// nodemon 설치 방법 -> npm i nodemon -g
// nodemon을 사용하면 컨트롤c눌러서 멈췄다 실행할 필요없이 수정하고 저장하면 바로 적용된다.

// 서버 생성하기 -> express 버전
// 이 모듈에는 서버를 생성하고, 요청을 처리할 수 있는 여러개의 함수와 메서드들이 포함
// 모듈 불러와서 express변수 안에 담아주기
const express = require('express')

// express뒤에 소괄호를 붙힌다는건 express함수를 호출하는거고 그거를 앱변수에 담아줬다.
const app = express()

// public 폴더에 접근해보자
// '브라우저가 정적 파일을 요청할때 public폴더에서 찾아라' 라는 의미이다. 
// 정적 파일을 등록 / 설정하는 미들웨어 설정 구문
app.use(express.static('public'))

// app.get / app.post
// 첫번째 슬래시 하나는 메인페이지를 의미한다.

app.get("/", (req, res) => {
    console.log('서버가 실행중입니다.')
    // send = 사용자에게 값 전달(응답) 하기. 기존 res.write와 같은 기능이다.
    // res.send('<h1>익스프레스 서버입니다.</h1>')

    /*
        express에서는 절대경로를 활용(규칙)
        컴퓨터마다 경로가 다르다 -> 현재 작업중인 파일의 절대경로를 알아오는 키워드가
        __dirname이다.
    */
    
    console.log(__dirname)
    res.sendFile(__dirname + "/public/main3.html")
})

// 서버의 포트 등록
app.listen(3000)

