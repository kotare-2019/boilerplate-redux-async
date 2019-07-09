//require express to enable the backend to talk to the front end
//need declare the server to express() so the server can talk
//need to tell the server how to communicate - with express.json(), and express.static('public')
//export - backend module.exports - so the server is used by everyone

const express = require ('express')
const server = express()

server.use(express.json())
server.use(express.static('public'))

module.exports = server