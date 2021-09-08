const mongoose = require('mongoose')

const exampleSchema = new mongoose.Schema({
  name: String
})

module.exports = mongoose.model('Example', exampleSchema, 'example')
