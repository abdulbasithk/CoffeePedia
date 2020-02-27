const { Coffee, Store, CoffeeCustomer, Customer } = require('../models/index')

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
}

module.exports = Controller
