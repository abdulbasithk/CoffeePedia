const { Store, Coffee, CoffeeOrder, Order, Customer } = require('../models/index')
const fs = require('fs')
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
                if (req.session.isLogin) isLogin = true
                else isLogin = false
                let errorLogin = false
                if (req.session.mustLogin) {
                    errorLogin = req.session.mustLogin
                    delete req.session.mustLogin
                }
                res.render('storeCoffee', {
                    coffees: result[0].Coffees,
                    isLogin,
                    errorLogin
                })
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
                .then(order => {
                    let orderDetail = []
                    for (let i = 0; i < req.body.CoffeeId.length; i++) {
                        orderDetail.push({
                            CoffeeId: +req.body.CoffeeId[i],
                            ammount: +req.body.ammount[i],
                            OrderId: order.id
                        })
                    }
                    CoffeeOrder.bulkCreate(orderDetail)
                        .then(data => res.redirect(`/store/${order.id}/confirmorder`))
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
                    OrderId: +req.params.id,
                },
                include: [Coffee, {
                    model: Order,
                    include: [Customer]
                }]
            })
            .then(data => {
                let result = []
                let totalHarga = 0;
                for(let item of data) {
                    if(item.ammount > 0) {
                        result.push(item)
                        totalHarga += Number(item.ammount) * Number(item.Coffee.price)
                    }
                }
                req.session.totalHarga = totalHarga
                res.render('formOrder', { data: result, isLogin:true, totalHarga })
            })
    }
    static showRecommend(req, res) {
        CoffeeOrder.findAll({ include: [Order, { model: Coffee, include: [Store]}]})
            .then(data => {
                let chart = {type:'bar',data:{labels:['Fore','Starbuck','Kenangan'],datasets:[{label:'Store',data:[0,0,0]}]}}
                for(let i = 0; i < data.length; i++) {
                    if(data[i].Coffee.Store.id === 1) chart.data.datasets[0].data[0] += (data[i].ammount)
                    else if(data[i].Coffee.Store.id === 2) chart.data.datasets[0].data[1] += (data[i].ammount)
                    else if(data[i].Coffee.Store.id === 3) chart.data.datasets[0].data[2] += (data[i].ammount)
                }
                res.render('recommend', { isLogin, data, chart })
            })
    }
}

module.exports = Controller