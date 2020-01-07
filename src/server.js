require('dotenv').config()

const path = require('path')
const express = require('express')
const server = express()
const mongoose = require('mongoose')

// LOCAL VARIABLES
const PORT = 3000

// ROUTES
const STOCK_ROUTE = require('~routes/stock')

// MONGODB CONFIG. ---------------------------- START
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to mongodb...'))
    .catch(err => console.error('NOT connect to mongobd!', err))
// MONGODB CONFIG. ---------------------------- END

server.use(express.json())

server.use('/', STOCK_ROUTE)

server.listen(PORT, () => { console.log('Server is running on PORT:', PORT) })
