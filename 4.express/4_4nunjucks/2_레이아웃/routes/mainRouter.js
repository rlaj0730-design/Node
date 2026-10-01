// router 모듈 가져오기
const express = require('express')
const router = express.Router()

// 메인페이지 경로 처리
router.get('/', (req, res) => {
    // 넌적스 파일 실행할때 -> render 함수 사용
    res.render('main')
})

// 야구, 축구 페이지 처리하기
router.get('/baseball', (req, res) => {
    res.render('baseball')
})

router.get('/soccer', (req, res) => {
    res.render('soccer')
})  
// 모듈화해서 내보내기
module.exports = router