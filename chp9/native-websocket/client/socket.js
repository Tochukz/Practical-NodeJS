const endpoint = 'ws://localhost:3000';
const ws = new WebSocket(endpoint); 
ws.onopen = function(event) {
    ws.send('front-end message: ABC');
};

ws.onerror = function(event) {
    console.log('server error message:', event.data);
};

ws.onmessage = function(event) {
    console.log('Server message: ', event.data);
};

