const express = require('express')
const router = express.Router()

// GET ALL
router.get('/library', (req, res) => {
    //  res.sendFile(path.join(__dirname+'/index.html'))
    res.send('GETTING ALL BOOKS')
})

// GET ONE
router.get('/library/:id', (req, res) => {
    res.send(`GETTING BOOK ${req.params.id}`)
})

// CREATING ONE
router.post('/', (req, res) => {})

// UPDATING ONE
router.patch('/:id', (req, res) => {})

// DELETING ONE
router.delete('/:id', (req, res) => {})

module.exports = router