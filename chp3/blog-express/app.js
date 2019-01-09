/**Require dependencies */
const http = require('http');
const express = require('express');
const app = express();

/**Configuration */
app.set('port', process.env.PORT || 3000);

/**Define routes */
app.get('/', (req, res, next) => {
    res.send("Hello Blog!");
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