const router = require('express').Router()
const CoffeeRouter = require('./coffee')
const StoreRouter = require('./store')
const RecommendRouter = require('./recommend')

router.get('/', (req, res) => res.render('home', {isLogin: true}))
router.get('/login', (req, res) => res.render('formLogin', {errors: false, isLogin: false}))
router.get('/register', (req, res) => res.render('formSignup', {errors: false, isLogin: false}))
router.get('/menu', (req, res) => res.render('menu', {isLogin: false}))
router.use('/store', StoreRouter)
router.use('/recommend', RecommendRouter)

module.exports = router