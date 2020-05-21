console.log("Hello Console!  For hello world, see port 3000");

var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(`Hello World.  The request method is ${request.method}.\n`);
});

server.listen(3000);
