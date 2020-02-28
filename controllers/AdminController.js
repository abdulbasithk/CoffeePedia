const { Coffee, Store, Customer, Order } = require('../models/index')

class Controller {
    static findAll (req, res) {
        Coffee.findAll({
            include: [Store]
        })
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
                id: req.session.dataLogin[0].id
            },
            include: {
                model: Order,
                order: [['date', 'DESC']]
            }
        })
            .then(data => {
                let msg = req.session.msg
                delete req.session.msg
                res.render('adminProfile', { data, isLogin:true, errors:msg})
            })
            .catch(err => res.send(err))
    }

    static showCoffee(req, res) {
        Store.findAll({
            include:[Coffee]
        })
            .then(stores => {
                for (let i = 0; i < stores.length; i++) {
                    for (let j = 0; j < stores[i].Coffees.length; j++) {
                        stores[i].Coffees[j] = stores[i].Coffees[j].name
                    }
                    stores[i].Coffees = stores[i].Coffees.join(', ')
                }
                res.render('listCoffee', {stores, isLogin:true})
            })
    }

    static showFormCoffee(req, res) {
        Store.findAll()
            .then(stores => {
                res.render('formAddCoffee', {stores, isLogin:true})
            })
    }

    static addCoffee(req, res) {
        Coffee.create(req.body)
            .then(done => res.redirect('/admin/listCoffee'))
            .catch(err => res.send(err))
    }

    static showFormStore(req, res) {
        res.render('formAddStore', {isLogin:true})
    }
    
    static addStore(req, res) {
        Store.create(req.body)
        .then(done => res.redirect('/admin/listCoffee'))
        .catch(err => res.send(err))
    }

    static showFormEdit (req, res) {
        Store.findByPk(+req.params.id)
            .then(store => res.render('formEdit', {isLogin:true, store}))
    }

    static update (req, res) {
        Store.update(req.body, {
            where: {
                id: +req.params.id
            }
        })
            .then(done => res.redirect('/admin/listcoffee'))
            .catch(err => res.send(err))
    }

    static deleted(req, res) {
        Store.destroy({where: {
            id: +req.params.id
        }})
            .then(del => res.redirect('/admin/listCoffee'))
    }
}

module.exports = Controller
