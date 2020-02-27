const router = require('express').Router()
const Controller = require('../controllers/StoreController')

router.get('/', (req, res) => {
    if(req.session.isLogin) isLogin = true
    else isLogin = false
    res.render('store', {isLogin})
})

router.get('/:id', Controller.showMenu)
router.post('/:id', Controller.redirectToBuy)

module.exports = router