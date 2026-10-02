// 모듈 불러오기
const mysql = require('mysql2')

const conn = mysql.createConnection({
    // db 연결 처리
    host: 'localhost',
    port : 3306,
    database: 'nodejs',
    password: '1234',
    user: 'root'
})

conn.connect()

console.log('db 연결~')

module.exports = conn