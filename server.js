const path = require('path')
const express = require('express')
const server = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to mongodb...'))
    .catch(err => console.error('NOT connect to mongobd!', err))

const PORT_MAIN = 8080

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})

server.listen(PORT_MAIN, () => {
    console.log('Server is running on PORT:', PORT_MAIN)
})

// const http = require('http') - USING HTTP LIBRARY
// let server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-type': 'text/plain'})
//     res.end('Server running...')
// })

// server.listen(8080, () => {
//     console.log('Server is running at 8080')
// })