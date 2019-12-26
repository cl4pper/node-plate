const path = require('path')
const express = require('express')
const server = express()
const mongoose = require('mongoose')

// MONGODB CONFIG. ---------------------------- START
mongoose.connect('mongodb://localhost/library', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to mongodb...'))
    .catch(err => console.error('NOT connect to mongobd!', err))

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
})

const Book = mongoose.model('Book', bookSchema)

// METHOD TO REGISTER DATA INTO DATABASE
async function createBook () {
    const book = new Book ({
        title: 'Cronicas de Sharpe',
        author: 'Bernard Cornwell',
        tags: [ 'adventure', 'history' ],
        isPublished: true
    })

    const result = await book.save()
}

// METHOD TO GET DATA FROM DATABASE
async function getBooks () {
    const result = await Book.find()
        .limit(1)
        .sort({ title: 1 })
        // .count() -> to count items under filter properties
        .select({ title: 1, tags: 1 })
}

// CALLING MTHODS TO INTERACT WITH DATABASE
// createBook()
getBooks()

// MONGODB CONFIG. ---------------------------- END

const PORT_MAIN = 3000

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