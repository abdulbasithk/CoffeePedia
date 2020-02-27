function checklogin (req, res, next) {
    if(req.session.isLogin) isLogin = true
    else isLogin = false
    next()
}

module.exports = checklogin