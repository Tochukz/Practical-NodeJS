/**Defining dependencies */
const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const auth = require('./auth');


/**Adding a decorator */
app.use((req, res, next) => {
   req.error = false;
   return next();
});

/**Defining middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/login', (req, res, next) => {
    res.render('login', {message: req.messsage});
});
/* using auth on a single route */
app.post('/login', auth.auth, (req, res, next) => {
   if(req.error){
       res.render('login', {errorMessage: req.errorMessage});
   }
   res.redirect('/home');
});
app.get('/home', (req, res, next) => {
    res.render('home');
});

http.createServer(app).listen(app.get('port'), () => {
    console.log(`Server running on localhost:${app.get('port')}`);
});
