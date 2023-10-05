const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    name : String,
    age : Number,
    grade : String

})

const Note = mongoose.model('notes', noteSchema)

module.exports = Note