// express 모듈 불러오기
const express = require('express')

// express 함수를 호출해서 Express 애플리케이션 객체 생성
const app = express()

// public 폴더의 정적 파일을 제공하는 미들웨어 등록
app.use(express.static('public'))

// get방식으로 접근
app.get("/", (req,res)=> {
    console.log('익스프레스 확인~')

    // sendFile -> dirname 필요
    //res.sendFile(__dirname + "/main.html")

    // redirect사용해보기 -> 다른 페이지로 이동시킴
    // public폴더안 존재 -> 4_1express기초/public -> 명시된 상태
    res.redirect("/main2.html")
})

// port번호 3100
app.listen(3100)