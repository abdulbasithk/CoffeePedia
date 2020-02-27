const router = require('express').Router()
const LoginController = require('../controllers/LoginController')
const StoreRouter = require('./store')
const RecommendRouter = require('./recommend')
const checkLogin = require('../middlewares/checkLogin.js')

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
router.use('/store', StoreRouter)
router.use('/recommend', RecommendRouter)
router.get('/profile', (req, res) => res.render('profile'))
router.get('/history', (req, res) => res.render('history'))
router.get('/history/order/:id', (req, res) => res.send('INI GET Confirm'))
router.post('/history/order/:id', (req, res) => res.send('INI POST Confirm'))


module.exports = router