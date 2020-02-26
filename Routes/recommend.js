const router = require('express').Router()
const Controller = require('../controllers/RecommendController')

router.get('/', (req, res) => res.render('recommend', {isLogin: false}))

module.exports = router