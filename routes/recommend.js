const router = require('express').Router()
const Controller = require('../controllers/RecommendController')

router.get('/', (req, res) => {
    if(req.session.isLogin) isLogin = true
    else isLogin = false 
    res.render('recommend', {isLogin})
})

module.exports = router