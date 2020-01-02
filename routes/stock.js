const express = require('express')
const router = express.Router()
const Stock = require('../models/item')

// GET ALL
router.get('/api/stock', async (req, res) => {
    try {
        const stock = await Stock.find()
        res.send(stock)
    } catch (err) {
        res.status(500).json({ message: err })
    }
})

// GET ONE
router.get('/api/stock/:id', async (req, res) => {
    try {
        const foundItem = await Stock.findOne({ _id: req.params.id })
        res.send(foundItem)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// CREATING ONE
router.post('/api/stock', async (req, res) => {
    const item = new Stock({
        ...req.body
    })
    try {
        const newItem = await item.save()
        res.status(201).json(newItem)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// UPDATING ONE
router.patch('/:id', (req, res) => {})

// DELETING ONE
router.delete('/:id', (req, res) => {})

module.exports = router