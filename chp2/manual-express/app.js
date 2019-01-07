/**
 * This demo shows how to create an express application manually without the use of the express generator CLI tool.
 */
/** Defining some dependencies*/
const express = require('express');
const http = require('http');
const path = require('path');

/**Instantiating express. Express uses functional programming */
const app = express();

/**Setting up the configuration for the application */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**Defining middlewares */

/**Defining routes */
app.all('*', (req, res) => { //Matches all URL and all methods
   res.render('index', {msg: 'Welcome to Practical Node.js!'});
});

/**Starting the server */
http.createServer(app)
    .listen(app.get('port'), () => {
        console.log(`Express server running on localhost:${app.get('port')}`);
    });



