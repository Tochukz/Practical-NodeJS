/**Dependencies */
const http = require('http');
const path = require('path');
const express = require('express');

/**Configuration */
const app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**Routes */
app.get('/', (req, res, next) => {
    res.send('Welcome to pug palace!');
});
app.get('/static-template', (req, res, next) => {
    res.render('static-template');
});
app.get('/variables-locals', (req, res, next) => {
    res.render('variables-locals', {title: 'Express.js Guide', body: 'The comprehensive Books'});
});
app.get('/attributes', (req, res, next) => {
    res.render('attributes', {flutter:false, nodejs: true});
});
app.get('/literals-comments', (req, res, next) => {
  res.render('literals-comments');
});
app.get('/text-script-style', (req, res, next) => {
   res.render('text-script-style');
});
app.get('/compile-time-JS', (req, res, next) => {
    res.render('compile-time-JS');
});
app.get('/conditions-iterations', (req, res, next) => {
   res.render('conditions-iterations');
});
app.get('/mixin', (req, res, next) => {
    res.render('mixin');
});
app.get('/page', (req, res, next) => {
    res.render('page');
});
app.get('/page2', (req, res, next) => {
    res.render('page2');
});

/**Server */
http.createServer(app)
    .listen(app.get('port'), () => {
      console.log(`Server running on localhost:${app.get('port')}`);
    });