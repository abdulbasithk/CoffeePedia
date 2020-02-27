const { Customer, Coffee } = require('../models/index')

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

}

module.exports = Controller