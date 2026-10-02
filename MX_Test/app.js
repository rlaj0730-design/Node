const express = require('express');
const app = express();
const LoginRouter = require('./routes/Loginrouter');

const bp = require('body-parser')
app.use(bp.urlencoded({extended : true}))

app.use(express.static('public'))



app.use('/', LoginRouter);
app.listen(3000)