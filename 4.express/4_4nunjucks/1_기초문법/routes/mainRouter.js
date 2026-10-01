const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // 넌적스 파일을 생성할때는 render 함수 사용하기
    res.render('main', {name : '홍길동'})
    // 이러한 형식이 서버사이드 렌더링
})

// 모듈화해서 내보내기
module.exports = router;