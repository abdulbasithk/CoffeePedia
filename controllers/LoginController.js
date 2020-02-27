const { Account, Customer } = require('../models/index')

class Controller {
    static getLogin(req, res) {
        let errors = req.session.errors
        delete req.session.errors
        res.render('formLogin', { errors, isLogin: false})
    }

    static postLogin(req, res) {
        let account = Account.findAll({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        })
        let customer = Customer.findAll({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        })
        Promise.all([account, customer])
            .then(data => {
                if (data[0].length == 0 && data[1].length == 0) {
                    let errors = [`Username or password invalid`]
                    req.session.errors = errors
                    res.redirect('/login')
                } else {
                    for (let item of data) {
                        if (item.length > 0) {
                            if (item[0] instanceof Account) {
                                req.session.isLogin = true;
                                req.session.dataLogin = item
                                res.redirect('/admin')
                            } else {
                                req.session.isLogin = true;
                                req.session.dataLogin = item
                                res.redirect('/')
                            }
                        }
                    }
                }
            })
            .catch(err => {
                res.send(err);
            })
    }
    static logout(req, res) {
        req.session.destroy()
        res.redirect('/')
    }

    static create (req, res) {
        Customer.findAll({
            where: {
                username: req.body.username
            }
        })
            .then(data => {
                if (data.length == 0) {
                    return Customer.create(req.body)
                } else {
                    req.session.usernameNotUnique = `Account with username: ${req.body.username} already in use, please input another username`
                    res.redirect('/register')
                }
            })
            .then(done => {
                req.session.doneRegist = `Account with username: ${req.body.username} has been added to database`
                res.redirect('/register')
            })
            .catch(err => res.send(err))
    }

    static getRegister (req, res) {
        let errors = []
        if (req.session.doneRegist) {
            errors.push(req.session.doneRegist)
            delete req.session.doneRegist
        }
        if (req.session.usernameNotUnique) {
            errors.push(req.session.usernameNotUnique)
            delete req.session.usernameNotUnique
        }
        res.render('formSignup', {errors, isLogin: false})
    }
}

module.exports = Controller