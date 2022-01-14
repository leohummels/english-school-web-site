const express = require('express')
const app = express()
const router = require('./routes/index.js')

//config do servidor 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname))

app.use('/', router);


//servidor
const server = app.listen(3000, () => {
    console.log('Servidor rodando')
})


//Fazer formulário 

module.exports = server;

