const http = require('http');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const routes = require('./routes/index');
const app = express();

//View Engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// Sokcet.io setup
const server = http.createServer(app);
const io = socketIO.listen(server);

io.sockets.on('connection', socket => {
  socket.on('messageChange', data => {
    console.log(data);
    socket.emit('receive', data.message.split(' ').reverse().join(''));
  });
});

app.set('port', process.env.PORT || 3000);
server.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
