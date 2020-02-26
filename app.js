const express = require('express');
const app = express()
const PORT = 1234
const router = require('./Routes/index')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use(router)

app.listen(PORT, () => console.log(`Coffepedia is online on ${PORT}`))