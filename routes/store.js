const router = require('express').Router()
const Controller = require('../controllers/StoreController')

router.get('/', Controller.findAll)

module.exports = router