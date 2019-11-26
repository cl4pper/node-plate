const http = require('http')
const express = require('express')
const server = express()

const PORT_MAIN = 8080

server.get('/', (req, res) => {
    res.status(200).send('Hello server')
})

server.listen(PORT_MAIN, () => {
    console.log('Server is running on PORT:', PORT_MAIN)
})

// let server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-type': 'text/plain'})
//     res.end('Server running...')
// })

// server.listen(8080, () => {
//     console.log('Server is running at 8080')
// })