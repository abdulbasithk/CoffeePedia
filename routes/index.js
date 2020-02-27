const router = require('express').Router()
const LoginController = require('../controllers/LoginController')
const StoreRouter = require('./store')
const RecommendRouter = require('./recommend')

router.get('/', (req, res) => {
    if(req.session.isLogin) isLogin = true
    else isLogin = false 
    res.render('home', { isLogin })
})

router.get('/login', LoginController.getLogin)
router.post('/login', LoginController.postLogin)
router.get('/logout', LoginController.logout)

router.get('/register', LoginController.getRegister)
router.post('/register', LoginController.create)
router.get('/menu', (req, res) => {
    if(req.session.isLogin) isLogin = true
    else isLogin = false 
    res.render('menu', {isLogin})
})
router.use('/store', StoreRouter)
router.use('/recommend', RecommendRouter)
router.get('/profile', (req, res) => res.send('PROFILE'))
router.get('/history', (req, res) => res.send('HISTORY'))


module.exports = router