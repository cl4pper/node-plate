const express = require('express')
const router = express.Router()
const Library = require('../models/book')

// GET ALL
router.get('/library', async (req, res) => {
    //  res.sendFile(path.join(__dirname+'/index.html'))
    try {
        const library = await Library.find()
        res.send(library)
    } catch (err) {
        res.status(500).json({ message: err })
    }
})

// GET ONE
router.get('/library/:id', (req, res) => {
    res.send(`GETTING BOOK ${req.params.id}`)
})

// CREATING ONE
router.post('/library', async (req, res) => {
    const book = new Library({
        title: req.body.title,
        author: req.body.author,
        isPublished: req.body.isPublished
    })
    try {
        const newBook = await book.save()
        res.status(201).json(newBook)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// UPDATING ONE
router.patch('/:id', (req, res) => {})

// DELETING ONE
router.delete('/:id', (req, res) => {})

module.exports = router