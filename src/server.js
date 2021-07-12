const express = require('express')                             // importa o express

const route = require('./route')                              //importa o route

const path = require('path')

const server = express()                                     //inicia o express no server

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true}))

server.use(route)                                            //ativa o route

server.listen(3000, () => console.log("rodando"))             //rodar em uma porta
