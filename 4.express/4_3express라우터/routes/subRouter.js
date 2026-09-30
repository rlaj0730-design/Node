// 필요한 모듈들 불러오기
// mainRouter 참고하기
const express = require('express')
const router = express.Router()
const path = require('path')

// 경로 수정
const file_path = path.join(__dirname, '../public')

// 메인페이지 접속 -> 비인기 메인

router.get('/', (req, res) => {

        console.log('마이너 페이지~')
        res.sendFile(file_path + '/minormain.html')
})

// 비인기 -> 낚시
router.get('/fishing', (req,res)=> {
        res.sendFile(file_path + '/fishing.html')
})
// 모듈 외부로 내보내기
module.exports = router