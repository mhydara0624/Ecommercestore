const mongoose = require('mongoose')
const ProductSchema = require('./product')
const BrandSchema = require('./brand')

const Product = mongoose.model('products', ProductSchema)
const Brand = mongoose.model('brands', BrandSchema)

module.exports = {
  Product,
  Brand
}
