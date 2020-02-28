const { Customer, Coffee, Order } = require('../models/index')
const email = require('../helpers/email')
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
                res.render('profile', { data, isLogin:true, errors:msg})
            })
            .catch(err => res.send(err))
    }

    static history(req, res) {
        
        Order.findAll({
            include: [{
                model: Customer,
                where: {
                    id: +req.params.id
                }
            }],
            order: [['date', 'DESC']]
        })
        .then(data => {
            if(req.session.totalHarga > data[0].Customer.money){
                let msg = `Saldo kurang`
                req.session.msg = msg
                res.redirect('/profile')
            } else {
                let msg = {
                    form: '"CoffeePedia" <coffeepedia@gmail.com',
                    to: data[0].Customer.email,
                    subject: 'CoffeePedia',
                    text: 'Congratulation your coffe has been made'
                }
                setTimeout(() => {
                    email.sendMail(msg, (error, info) => {
                        if(error) console.log(error);
                        else console.log(info);
                    })
                }, 10000)
                data[0].orderKey = `${data[0].Customer.username}${data[0].orderKey}`
                Customer.decrement('money', {by: req.session.totalHarga, where : { id: +req.params.id }})
                .then(() => {
                    res.render('history', { data, isLogin:true })
                })
                req.session.dataLogin[0].money - req.session.totalHarga
                console.log(req.session.dataLogin[0]);
                delete req.session.totalHarga
            }
            })
            .catch(err => console.log(err))
    }

    static delete(req, res) {
        Order.destroy({
            where: {
                id: +req.params.id
            }
        })
            .then(data => {
                res.redirect('/store')
            })

            .catch(err => {
                res.send(err)
            })
    }
    static showtopup(req, res) {
        Customer.findAll({ where: { id: +req.params.id}})
        .then(data => res.render('topup', {errors:false, isLogin:true, data}))
        
    }
    static topup (req, res) {
        Customer.increment('money', {by: req.body.money, where : { id: +req.params.id }})
                .then(() => {
                    res.redirect(`/profile`)
                })
                .catch(err => res.send(err))
    }
}

module.exports = Controller