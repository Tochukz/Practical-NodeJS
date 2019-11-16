const session = require('express-session');
const mongoSkin = require('mongoskin');


const DBconnectionStr = 'mongodb://localhost:27017/session-auth';
const db = mongoSkin.db(DBconnectionStr);

module.exports.authorize = function(req, res, next) {
  console.log('Authorizing...');
  if(req.session && req.session.userId) {
      console.log('SessionID', req.session.userId);
      const user = db.users.findOne({_id: req.session.userId}).toArray();
      req.session.username = user.username;
      next();
  } 
  console.log('No session or sessionID found')
  res.status('401').send('You are not Authorized to view this page until you <a href="/login">Login</>');
};

module.exports.authenticate = function(req, res, next) {
    console.log('Authenticating...');

    let warning;
    if (req.session && req.session.userID) {
        console.log('Session found...');
        next();
    }

    console.log('No session found...')
    if (!req.body.username && !req.body.password) {
        warning = 'Please enter your username and password';
        return res.redirect(304, `/login?warning=${warning}`);
    }
    
    const username = req.body.username;
    const password = req.body.password;
    console.log('Username', username);
    console.log('password', password);

    db.bind('users');
    db.users.findOne({username, password}, (err, user) => {
       if( err) {
           console.log(err)
       }
       if (!user) {
         warning = 'No user found with the supplied credentials';
         res.redirect(`/login?warning=${warning}`);
       } else if(user && user._id && user.username){
         console.log(`Logged in as ${user.username}`);
         req.session.userId = user._id;
         next();  
        } else {
            console.log('Authentication failed due to invalid login credentials...');
            warning = 'Incorrect username and password combination';
            res.redirect(`/login?warning=${warning}`);
        }
    });
    
}