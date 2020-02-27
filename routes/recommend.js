const router = require('express').Router()
const Controller = require('../controllers/RecommendController')
const checkLogin = require('../middlewares/checkLogin')

router.get('/', checkLogin,(req, res) => {
    res.render('recommend', {isLogin})
})

module.exports = router