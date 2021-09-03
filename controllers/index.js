const { Product } = require('../models')

const createProducts = async (req, res) => {
  try {
    const product = await new Product(req.body)
    await product.save()
    return res.status(201).json({
      product
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    return res.status(200).json({ products })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Product.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send(' deleted')
    }
    throw new Error(' not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createProducts,
  getAllProducts,
  deleteProduct
}
