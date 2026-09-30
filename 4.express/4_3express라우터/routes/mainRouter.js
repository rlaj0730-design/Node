// 모듈 불러오기
const express = require('express')

// 경로에 관련된 내용을 처리하는 모듈
const router = express.Router()

// 경로를 수정해야하는 경우 사용하는 모듈
const path = require('path')
// 경로수정 추가 -> public폴더 안에 있는 파일 접근.(파일이 다른 선상에 있음.)(라우츠 폴더를 나가서 퍼블릭으로 들어가기)
// 현재작업중인 위치 -> mainRouter -> public 폴더를 접근
// 상위폴더로 한번 빠져나가서 접근
const file_path = path.join(__dirname, '../public')

router.get('/', (req, res) => {

        console.log(file_path)
        res.sendFile(file_path + '/main.html')
})

// 축구페이지를 접근했을 때 등록
// 라우터 세팅 시 a태그 앞경로 생략 가능 -> http://localhost:3000/
router.get('/soccer', (req,res)=> {
        res.sendFile(file_path + '/soccer.html')
})

// 실습 -> 야구페이지로 이동시키기
router.get('/baseball', (req, res)=>{
        res.sendFile(file_path + '/baseball.html')
})

// 모듈화 시키고 밖으로 내보내기
module.exports = router
