const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A product must have a name, please type it!'],
    unique: true
  },
  price: {
    type: Number,
    required: [true, 'A product must have a price, please type it!']
  },
  description: String
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
