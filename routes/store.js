const router = require('express').Router()
const Controller = require('../controllers/StoreController')
const checkLogin = require('../middlewares/checkLogin')

router.get('/', checkLogin, (req, res) => {
    res.render('store', {isLogin})
})

router.get('/:id', Controller.showMenu)
router.post('/:id', Controller.redirectToBuy)
router.get('/:id/confirmorder', Controller.orderConfirm)

module.exports = router