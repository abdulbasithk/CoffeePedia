const router = require('express').Router()
const Controller = require('../controllers/StoreController')

router.get('/', (req, res) => res.render('store', {isLogin: false}))

module.exports = router