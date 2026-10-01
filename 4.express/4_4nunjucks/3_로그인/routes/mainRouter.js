// express 모듈을 불러와서 라우터를 생성
const express = require('express')
const router = express.Router()

// 메인페이지(메인 경로)를 접속 했을 때
router.get('/', (req, res) => {
    // 넌적스 파일 실행할때 -> render 함수 사용
    res.render('login')
})

// loginResult 처리
router.post('/loginResult', (req, res) => {
    // req -> client정보가 담겨있다
    // express -> post방식으로 들어오는 데이터를 처리할 수 있는 함수를 가지고 있다
    // req.body -> post방식으로 들어오는 데이터를 처리할 수 있는 객체
    console.log(req.body)
    console.log('login result', req.body)

    // 객체의 키를 변수 처럼 활용하기
    let {id, pw} = req.body
    console.log('변수 id', id, '변수 pw', pw)

    // 조건문을 활용해서 템플릿 파일로 데이터 보내기
    if(id === 'admin' && pw === '1234') {
        res.render('loginResult', {know : id})
    } else {
        res.render('loginResult')
    }
})

// 모듈 내보내기
module.exports = router;