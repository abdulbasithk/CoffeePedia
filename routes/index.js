const router = require('express').Router()
const LoginController = require('../controllers/LoginController')
const CoffeeRouter = require('./coffee')
const StoreRouter = require('./store')

router.get('/', (req, res) => {
    if(req.session.isLogin) isLogin = true
    else isLogin = false 
    res.render('home', { isLogin })
})

router.get('/login', LoginController.getLogin)
router.post('/login', LoginController.postLogin)
router.get('/logout', LoginController.logout)

router.get('/register', (req, res) => res.render('formSignup', {errors: false, isLogin: false}))
router.get('/menu', (req, res) => res.render('menu', {isLogin: false}))
router.use('/coffee', CoffeeRouter)
router.use('/store', StoreRouter)

module.exports = router