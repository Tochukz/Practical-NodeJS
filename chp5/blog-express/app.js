/**Require dependencies */
const express = require('express');
const routes = require('./routes');
const user = require('./routes/user');
const article = require('./routes/article');
const http = require('http');
const path = require('path');
const mongoskin = require('mongoskin');
const dbUrl = process.env.MONGOHQ_URL || 'mongodb://@localhost:27017/blog';

const db = mongoskin.db(dbUrl);
const collections = {
    articles: db.collection('articles'),
    users: db.collection('users')
};

/**Express' middleware modules */
const logger = require('morgan');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');
const methodOverride = require('method-override'); //To support client not having all HTTP methods

const app = express();
app.locals.appTitle = 'Blog Express';


/**Add middleware that exposes Mongoskin/MongoDB collections in each route via the request object.
 *This is called a decorator pattern.
 */
app.use((req, res, next) => {
    if(!collections.articles || !collections.users)
      return next(new Error('No collection'));
    req.collections = collections;
    return next();
});

/**Settings and configurations */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**Defining middlewares */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

/**Defining error handler for dev purposes */
if(app.get('env') === 'development') {
    app.use(errorHandler('dev'));
}
console.info(routes);
/**Defining routes */
app.get('/', routes.index);
app.get('/login', user.login);
app.post('/login', user.authenticate);
app.get('/logout', user.logout);
app.get('/admin', article.admin);
app.get('/post', article.post);
app.post('/post', article.postArticle);
app.get('/articles/:slug', article.show);

// /**Defining REST API routes */
app.get('/api/articles', article.list);
app.post('/api/articles', article.add);
app.put('/api/articles/:id', article.edit);
app.delete('/api/articles/:id', article.del);

/**Define 404 Not found page */
app.all('*', (req, res) => {
    res.status(404).send();
});

/*Create the server**/
const server = http.createServer(app);
const boot = function() {
    server.listen(app.get('port'), function() {
        console.info(`Express server listening on port ${app.get('port')}`);
    });
};
const shutdown = function () {
    server.close(process.exit);
};

if (require.main === module) {
    boot();
} else {
    console.info('Running app as module');
    exports.boot = boot;
    exports.shutdown = shutdown;
    exports.port = app.get('port');
}
