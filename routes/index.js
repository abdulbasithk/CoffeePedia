const router = require('express').Router()
const LoginController = require('../controllers/LoginController')
const StoreRouter = require('./store')
const RecommendRouter = require('./recommend')
const checkLogin = require('../middlewares/checkLogin.js')
const CustomerController = require('../controllers/CustomerController')
const AdminRouter = require('./admin')
const isAdmin = require('../middlewares/checkAdmin')
const ckLogin = require('../middlewares/checkCust')

router.get('/', checkLogin, (req, res) => {
    res.render('homeUpdate', { isLogin })
})
router.get('/formorder', (req, res) => res.render('qrCode', {isLogin: false}))

router.get('/login', LoginController.getLogin)
router.post('/login', LoginController.postLogin)
router.get('/logout', LoginController.logout)

router.get('/register', LoginController.getRegister)
router.post('/register', LoginController.create)
router.get('/menu', (req, res) => res.render('menu'))
router.use(ckLogin)
router.get('/profile', (req, res) => {
    CustomerController.showProfile(req, res)
})

router.get('/profile/:id/history', (req, res) => {
    CustomerController.history(req, res)
})
router.get('/profile/:id/delete', (req, res) => {
    CustomerController.delete(req, res)
})
router.get('/profile/:id/topup', (req, res) => {
    CustomerController.showtopup(req, res)
})
router.post('/profile/:id/topup', (req, res) => {
    CustomerController.topup(req, res)
})
router.use('/store', StoreRouter)
router.use('/recommend', RecommendRouter)
router.use(isAdmin)
router.use('/admin', AdminRouter)

module.exports = router