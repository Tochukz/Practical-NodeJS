const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const hbs = require('express-hbs');
const expressValidator = require('express-validator');
const session = require('express-session');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(session({secret: 'krunal', resave: false, saveUninitiialized: true}));
app.use(expressValidator());

app.get('/', function(req, res){
    res.send('hello');
});

app.listen(PORT, function(){
    console.log('Server is running on', PORT);
});

/**
 * Avoid storing any sensitive information in cookies. The best practice is not to store 
 * any info in cookies manually - except session ID,  which Express.js middleware stores for 
 * us authomatocally - because cookies are not secure.
 * Also, cookies have size limitation that is very easy to reach and which varies by browser.
 */

 /**
  * To make sessions persistent and available across multiple servers, we can use a database 
  * such as Redis or MongoDB as a session store that will save the data on restarts and crashes 
  * of the servers.
  */