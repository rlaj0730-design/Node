const express = require('express')

const router = express.Router()

const path = require('path')

const file_path = path.join(__dirname, '../public')

router.get('/', (req, res) => {

        console.log(file_path)
        res.sendFile(file_path + '/Login.html')
})

router.post('/postLogin', (req, res) => {
   
    console.log(req.body)
    

    
    let {id, pw} = req.body
    console.log('변수 id', id, '변수 pw', pw)

    
    if(id == 'smart' && pw == '1234') {
        res.sendFile(file_path + '/LoginS.html')
    } else {
        res.sendFile(file_path + '/LoginF.html')
    }
})
 
module.exports = router;