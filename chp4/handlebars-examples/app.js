var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const hbs = require('hbs');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

//Adding new routes
app.get('/variables', (req, res, next) => {
  res.render('variables', {name: "Tochukwu", email: 'me@tochukwu.xyz'});
});

app.get('/conditions-iterations', (req, res, next) => {
  const admin = (Math.random() > 0.5)? true : false;
  const data = {
    user: {admin: admin},
    langs: ['PHP', 'JavaScript', 'C#', 'Dart', 'Python'],
    letters: ['<a>', '<b>', '<c>']
  };
  res.render('conditions-iterations', data);
});

app.get('/with', (req, res, next) => {
    const data = {
      user: {
        name: 'Tochukwu',
        contact: {
          email: 'truetochukz@gmail.com',
          website: 'http://tochukwu.xyz'
        },
        address: {
          province: 'Western Cape',
          city: 'Cape Town'
        }
      }
    };
    res.render('with', data);
});

app.get('/helpers', (req, res, next) => {
  /**Registering a custom handlebars helper */
  hbs.registerHelper('table', (data) => {
    let str = '<table border="1">';
    for (let i = 0; i < data.length; i++) {
      str += '<tr>';
      for (let cell in data[i]) {
        str += '<td>'+ data[i][cell]+'</td>';
      }
      str += '</tr>'; 
    }
    str += '</table>'; 
    return new hbs.SafeString(str);
  });

  const data = [
    {name: 'express', url: 'http://expressjs.com/'},
    {name: 'hapi', url: 'http://spumko.github.io/'},
    {name: 'compound', url: 'http://compoundjs.com/'},
    {name: 'derby', url: 'http://derbyjs.com/'}
  ];
  res.render('helpers', {data: data});
});

app.get('/email-template', (req, res, next) => {
  //res.render('email-template')
  const reservation = {
    bookingNumber: 8947588904,
    email: 'john.turkey@gmail.com',
    yourReservation: '1 Night, 1 Room',
    checkIn: '11 December 2018',
    checkOut: '30 December 2018',
    superiorDoubleRoom: 'R1,020.84',
    vat: 'R120',
    totalPrice: 'R1,140.84'
  }
  
  hbs.registerHelper('setVariable', (variableName, variableValue, options) => {
    options.data.root[variableName] = variableValue;
  });

  res.render('email-template', reservation);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
