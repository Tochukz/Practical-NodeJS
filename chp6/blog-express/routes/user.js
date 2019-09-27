module.exports.list = (req, res, next) => {
    res.send('reepond with a resource');
};

module.exports.login = (req, res, next) => {
    res.render('login');
};

module.exports.logout = (req, res, next) => {
    req.session.destroy();
    res.redirect('/');
};

module.exports.authenticate = (req, res, next) => {
    if (!req.body.email || !req.body.password)
      return res.render('login', {error: 'Please enter your email and password.'})
    req.collections.users.findOne({email: req.body.email, password: req.body.password}, 
        (error, user) => {
          if (error) return next(error);
          if (!user) return res.render('login', {error: 'Incorrect email & password combinaion.'});
          //Authenticating the user an adminitrator
          req.session.user = user;
          req.session.admin = user.admin;
          res.redirect('/admin');
        });
};

/* For salting passwords use the core Node.js module crypto. */