const { Store, Coffee, CoffeeOrder, Order} = require('../models/index')

class Controller {
    static findAll(req, res) {
        Store.findAll()
            .then(data => {
                res.send(data)
            })

            .catch(err => {
                res.send(err)
            })
    }

    static create(req, res) {
        Store.create(req.body)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static showEdit(req, res) {
        Store.findAll({
            where: {
                id: +req.params.id
            }
        })
            .then(data => {
                res.send(data)
            })

            .catch(err => {
                res.send(err)
            })
    }

    static edit(req, res) {
        Store.update(req.body, {
            where: {
                id: +req.params.id
            }
        })
            .then(data => {
                res.send(data)
            })

            .catch(err => {
                res.send(err)
            })
    }

    static showMenu(req, res) {
        Store.findAll({
            where: {
                id: +req.params.id
            },
            include: [Coffee]
        })
            .then(result => {
                if(req.session.isLogin) isLogin = true
                else isLogin = false
                let errorLogin = false
                if (req.session.mustLogin) {
                    errorLogin = req.session.mustLogin
                    delete req.session.mustLogin
                }
                res.render('storeCoffee', {coffees: result[0].Coffees, isLogin, errorLogin})
            })
            .catch(err => res.send(err))
    }

    static redirectToBuy(req, res) {
        req.body.Customer = req.session.dataLogin
        if (req.session.isLogin) {
            Order.create({
                CustomerId: req.body.Customer[0].id,
                date: new Date()
            })
            .then(data => {
                let orderDetail = []
                for(let i = 0; i < req.body.CoffeeId.length; i++) {
                    orderDetail.push({CoffeeId: +req.body.CoffeeId[i], ammount: +req.body.ammount[i], OrderId: data.id})
                }
                CoffeeOrder.bulkCreate(orderDetail)
                    .then(data => res.send(data))
            })
            .catch(err => res.send(err))
        } else {
            req.session.mustLogin = 'You must login first for order'
            res.redirect(`/store/${req.params.id}`)
        }
    }

    static orderConfirm(req, res) {
        CoffeeOrder.findAll({
            where: {
                OrderId: +req.params.id
            },
            include: [Coffee, Order]
        })
            .then(data => {
                res.send(data)
            })
    }
}

module.exports = Controller