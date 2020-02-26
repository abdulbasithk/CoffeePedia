const { Store } = require('../models/index')

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
}

module.exports = Controller