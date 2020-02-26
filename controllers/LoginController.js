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
                if (data.length === 0) {
                    let errors = [`Username or password invalid`]
                    req.session.errors = errors
                    res.redirect('/login')
                } else {
                    for (let item of data) {
                        if (item.length > 0) {
                            if (item[0] instanceof Account) {
                                req.session.isLogin = true;
                                req.session.dataLogin = item[0]
                                res.redirect('/admin')
                            } else {
                                req.session.isLogin = true;
                                req.session.dataLogin = item[1]
                                res.redirect('/')
                            }
                        }
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    static logout(req, res) {
        req.session.destroy()
        res.redirect('/')
    }
}

module.exports = Controller