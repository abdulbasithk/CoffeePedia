const router = require('express').Router()

router.get('/', (req, res) => res.render('home', {isLogin: true}))
router.get('/login', (req, res) => res.render('formLogin', {errors: false, isLogin: false}))
router.get('/register', (req, res) => res.render('formSignup', {errors: false, isLogin: false}))
router.get('/menu', (req, res) => res.render('menu', {isLogin: false}))


module.exports = router