module.exports.list = (req, res, next) => {
    res.send('reepond with a resource');
};

module.exports.login = (req, res, next) => {
    res.render('login');
};

module.exports.logout = (req, res, next) => {
    res.redirect('/');
};

module.exports.authenticate = (req, res, next) => {
    res.redirect('/admin');
};

  

