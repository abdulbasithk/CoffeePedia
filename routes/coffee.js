const router = require('express').Router()
const Controller = require('../controllers/CoffeeController')
router.get('/', Controller.findAll)

module.exports = router