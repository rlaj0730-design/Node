const express = require('express')
const router = express.Router()

// 메인 경로 처리
router.get('/', (req, res) => {
    if(req.session.nick){
        console.log('메인 라우터 확인', req.session.nick)
        res.render('main', {nick : req.session.nick})
    }else{
        res.render('main')
    }
    
})

router.get('/join', (req, res) => {
    res.render('join')
})

// 로그인, 업데이트, 딜리트 경로에 대한 라우터 하기
router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/update', (req, res) => {
    res.render('update')
})

router.get('/delete', (req, res) => {
    res.render('delete')
})
// 모듈 내보내기
module.exports = router;