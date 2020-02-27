const router = require('express').Router()
const Controller = require('../controllers/CustomerController')
router.get('/', (req, res) => res.send('Profile'))
router.get('/:id', Controller.showProfile)
router.get('/:id/history', Controller.history)

module.exports = router