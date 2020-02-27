const router = require('express').Router()
const Controller = require('../controllers/StoreController')

router.get('/', Controller.showRecommend)

module.exports = router