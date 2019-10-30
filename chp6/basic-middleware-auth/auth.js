module.exports.auth = (req, res, next) => {
    const USER = 'chucks';
    const PASS = '12345';
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password){
        req.error = true;
        req.errorMessage = "Username and password is required";
        return next();
    }
    if(username === USER && password === PASS) {
        return next();
    }
    //next(new Error('Not authorized'));
    res.status(401).send();
};
