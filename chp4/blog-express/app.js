/**Require dependencies */
const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

/**Configuration */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**Define routes */
app.get('/', (req, res, next) => {
    res.send("Hello Blog!");
});
app.get('/:template', (req, res, next) => {
    const articles = [];
    res.render(req.params.template, {articles});
});

/** Create server */
const server = http.createServer(app);

const boot = () => {
  server.listen(app.get('port'), () => {
    console.info(`Express server listening on port ${app.get('port')}`);
  });
};
const shutdown = () => {
  server.close();
};

if (require.main === module) {
    boot(); // "node app.js" command
} else {
    console.info('Running app as a module');
    exports.boot = boot;
    exports.shutdown  = shutdown;
    exports.port = app.get('port');
}