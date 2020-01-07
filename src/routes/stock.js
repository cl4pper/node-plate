const express = require('express')
const router = express.Router()
const Stock = require('~models/item')

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

// DELETING ONE
router.delete('/api/stock/:id', async (req, res) => {
    const foundItem = await Stock.findOne({ _id: req.params.id })

    if (!foundItem) {
        console.log('Item NOT found! -> to delete')
        return
    }

    try {
        await foundItem.delete()
        res.status(200).json({ message: 'Item deleted.' })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// UPDATING ONE
router.patch('/api/stock/:id', async (req, res) => {
    const foundItem = await Stock.findOne({ _id: req.params.id })

    if (!foundItem) {
        console.log('Item NOT found -> to update')
        return
    }

    try {
        await Stock.updateOne({ _id: req.params.id }, { $set: { ...req.body } })
        res.status(200).json({ message: 'Item updated.' })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = router