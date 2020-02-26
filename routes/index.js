const router = require('express').Router()
const CoffeeRouter = require('./coffee')
const StoreRouter = require('./store')

router.use('/coffee', CoffeeRouter)
router.use('/store', StoreRouter)

module.exports = router