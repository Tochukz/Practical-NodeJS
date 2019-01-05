var http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello world\n");
}).listen(9000, 'localhost');

console.log("Server started\n Listening on localhost:9000");