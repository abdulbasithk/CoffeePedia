const { Customer, Coffee, Order } = require('../models/index')
const checkLogin = require('../middlewares/checkLogin')

class Controller {
    static findAll(req, res) {
        Customer.findAll()
            .then(data => {
                res.send(data)
            })

            .catch(err => {
                res.send(err)
            })
    }

    static create(req, res) {
        Customer.create(req.body)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
    static showProfile(req, res){
        Customer.findAll({
            where: {
                id: +req.params.id
            }
        })
            .then(data => res.render('profile', { data, isLogin:true }))
    }

    static history(req, res) {
        Order.findAll({
            include: [{
                model: Customer,
                where: {
                    id: +req.params.id
                }
            }]
        })
            .then(data => {

            })
    }
}

module.exports = Controller