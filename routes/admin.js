const router = require('express').Router()
const Controller = require('../controllers/AdminController')
router.get('/', (req, res) => res.render('admin', {isLogin: true}))
router.get('/profile', Controller.showProfile)
router.get('/listCoffee', Controller.showCoffee)
router.get('/addCoffee', Controller.showFormCoffee)
router.post('/addCoffee', Controller.addCoffee)
router.get('/addStore', Controller.showFormStore)
router.post('/addStore', Controller.addStore)
router.get('/editStore/:id', Controller.showFormEdit)
router.post('/editStore/:id', Controller.update)
router.get('/delete/:id', Controller.deleted)

module.exports = router