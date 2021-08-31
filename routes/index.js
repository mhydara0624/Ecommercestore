const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))

router.get('/products', controllers.getAllProducts)

module.exports = router
