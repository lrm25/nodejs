console.log("Heads or tails?  Reply with a path.");

var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    var flip
    var flipInt = Math.ceil(Math.random() * 2)
    if (flipInt == 1) {
        flip = "heads"
    } else {
        flip = "tails"
    }
    var call = request.url.replace('/','')
    var result
    if (call == flip) {
        result = "You win."
    } else {
        result = "You LOSE!"
    }
    response.end(`You called ${call}.  It's ${flip}.  ${result}\n`);
});

server.listen(3000);
