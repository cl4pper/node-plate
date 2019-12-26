const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    tags: [ String ],
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean
})

module.exports = mongoose.model('Library', bookSchema)