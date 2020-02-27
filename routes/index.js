const router = require('express').Router()
const LoginController = require('../controllers/LoginController')
const StoreRouter = require('./store')
const RecommendRouter = require('./recommend')
const checkLogin = require('../middlewares/checkLogin.js')
const Controller = require('../controllers/CustomerController')
const CustomerRoute = require('./customer')

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
router.get('/profile', (req, res) => res.send('Profile'))
router.get('/profile/:id', (req, res) => {
    Controller.showProfile(req, res)
})
router.get('/profile/:id/history', (req, res) => {
    Controller.history(req, res)
})
router.use('/store', StoreRouter)
router.use('/recommend', RecommendRouter)


module.exports = router