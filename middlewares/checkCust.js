function checkAdmin (req, res, next) {
    if(req.session.isLogin) {
        next()
    } else {
        res.redirect('/')
    }
}

module.exports = checkAdmin