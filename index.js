const express = require('Express')
const app = express()
const home = require('./router/web.js')

app.set('view engine' ,'ejs')
app.use('/',home)

app.listen(3002)