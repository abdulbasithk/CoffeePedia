const { Store, Coffee} = require('../models/index')

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
        if (req.session.isLogin) {
            Store.findByPk(+req.params.id, {
                include: [Coffee]
            })
                .then(data => res.send(data))
                .catch(err => res.send(err))
        } else {
            req.session.mustLogin = 'You must login first for order'
            res.redirect(`/store/${req.params.id}`)
        }
    }
}

module.exports = Controller