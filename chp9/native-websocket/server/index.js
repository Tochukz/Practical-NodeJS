const WebSocketServer = require("ws").Server;
const wss = new WebSocketServer({port : 3000});
wss.on('connection', ws => {
    ws.send('socket connection established');
    setInterval(() => {
        ws.send((new Date).toLocaleTimeString());
    }, 1000);
    ws.on('message', message => {
        console.log('received: %s', message);
    });
});