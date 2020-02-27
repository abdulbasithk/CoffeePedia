const router = require('express').Router()
const LoginController = require('../controllers/LoginController')
const StoreRouter = require('./store')
const RecommendRouter = require('./recommend')
const checkLogin = require('../middlewares/checkLogin.js')
const CustomerController = require('../controllers/CustomerController')

router.get('/', checkLogin,(req, res) => {
    res.render('homeUpdate', { isLogin })
})
router.get('/formorder', (req, res) => res.render('qrCode', {isLogin: false}))

router.get('/login', LoginController.getLogin)
router.post('/login', LoginController.postLogin)
router.get('/logout', LoginController.logout)

router.get('/register', LoginController.getRegister)
router.post('/register', LoginController.create)
router.get('/menu', (req, res) => res.render('menu'))
router.get('/profile', (req, res) => res.render('profile'))
router.get('/profile/:id', (req, res) => {
    CustomerController.showProfile(req, res)
})
router.get('/profile/:id/history', (req, res) => {
    CustomerController.history(req, res)
})
router.get('/profile/:id/delete', (req, res) => {
    CustomerController.delete(req, res)
})
router.use('/store', StoreRouter)
router.use('/recommend', RecommendRouter)

module.exports = router