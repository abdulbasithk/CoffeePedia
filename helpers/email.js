const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'coffeepedia.hactiv@gmail.com',
        pass: 'hacktiv8'
    },
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = transporter