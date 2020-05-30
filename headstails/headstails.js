console.log("Heads or tails?  Reply with a path.");

var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  var flip
  var flipInt = Math.ceil(Math.random() * 2)
  if (flipInt === 1) {
    flip = "heads"
  } else {
    flip = "tails"
  }
  var call = request.url.toLowerCase().replace('/','');
  var result
  if (call === flip) {
    result = "You win."
  } else {
    result = "You LOSE!"
  }
  response.write('<!DOCTYPE html>\n<html><title>The Grand Result</title><body>');
  if (call === "heads" || call === "tails") {
    response.write('You called ' + call + '.  It\'s ' + flip + '.  ' + result);
  } else {
    response.write('You called ' + call + ', which is neither heads nor tails, so of course you lose.');
  }
  response.end('</body></html>');
});

server.listen(3000);
