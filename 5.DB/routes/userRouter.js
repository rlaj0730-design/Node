// 모듈 불러오기
const express = require("express");
const router = express.Router();
// db 연결 모듈 가져오기
const conn = require("../config/db");

// 회원가입 기능
router.post('/join', (req, res) => {
    console.log('join 확인')

    // post 방식으로 값을 받아와서 확인할 수 있는 속성 -> body
    console.log(req.body)

    // DB 연결 로직
    // sql문, 입력이 필요한 경우 값을 넣어주기
    let sql = "insert into member values (?,?,?)"

    conn.query(sql, [req.body.id, req.body.pw, req.body.nick], (err, rows) => {
        console.log(rows)

        // 조건문 생성
        if(rows){
            res.redirect('/')
        }else{
            res.send('<script>alert("회원가입 실패")</script>')
        }
    })
})


// 로그인 기능
// post방식으로 데이터 넘어오는지 확인 -> console로 확인
router.post('/login', (req, res)=>{
    console.log(req.body)
    let {id, pw} = req.body

    // sql 쿼리문 작성
    let sql = 'select * from member where id=? and pw=?'
    conn.query(sql, [id, pw], (err, rows) => {
        console.log(rows)

        // 조건문 생성
        if(rows.length > 0){
            console.log('로그인 확인', rows[0].nick)

            // 세션에 닉네임 저장
            /*
                서버는 세션을 생성하고 세션 ID를 쿠키(브라우저)에 저장
                이후 요청 시 -> 쿠키에 담긴 세션 ID로 세션 데이터를 찾아 로그인 상태를 유지
            */
           req.session.nick = rows[0].nick
           res.redirect('/')
        }else{
            console.log('로그인 실패')
        }
    })
})

// 회원정보 수정
router.post('/update', (req,res)=>{
    console.log(req.body)
    let {id, pw, nick} = req.body

    // 쿼리문 작성
    let sql = 'update member set nick =? where id =? and pw = ?'
    conn.query(sql, [nick, id, pw], (err,rows) => {
        console.log(rows)
        // 몇개의 행이 실제로 영향을 받았는지 알려주는 속성
        if(rows.affectedRows > 0){
            res.redirect('/')
        }
    })
})

// 회원 탈퇴
router.post('/delete', (req, res)=> {
    let {id, pw} = req.body
    let sql = 'delete from member where id = ? and pw = ?'
    conn.query(sql, [id, pw], (err, rows) => {
        console.log(rows)
        if(rows.affectedRows > 0){
            res.redirect('/')
        }
    })
})

// 로그아웃 
router.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
})

module.exports = router;