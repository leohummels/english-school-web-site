const express = require('express')
const app = express()
const router = require('./routes/index.js')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname))

app.use('/', router);

const server = app.listen(3000, () => {
    console.log('Servidor rodando')
})

//config template engine no servidor (nunjucks)

module.exports = server;

