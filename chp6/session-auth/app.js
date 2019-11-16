const path = require('path');
const express = require('express');
const session = require('express-session');
const expressHbs = require('express-handlebars');

const router = require('./router/all')

const app = express();



app.set('view engine', 'hbs');
app.engine('hbs', expressHbs({extname: 'hbs'}));
/*
app.engine( 'hbs', hbs({
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/pages/',
  partialsDir: __dirname + '/views/partials/'
}));
app.set('views', 'views/');

// Default veiw directory for express is 'view`
// Default partials directory is /views/partials
// Default layouts directory is /views/layouts
// Default extension is handlebars
*/

app.use(express.static(path.join(__dirname, 'public')));
// Body parser
app.use(express.urlencoded({extended: true}));
app.use(session({ 
    secret: 'tochukwu', 
    resave: false, 
    saveUninitialized: true, 
    cookie: {secure: true}
}));

app.use('/', router)


const port = 5000;
app.listen(port, () => console.log(`Server running @ ${port}`));