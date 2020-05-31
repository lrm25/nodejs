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
    result = "<p style=\"color:green\">You win.</p>"
  } else {
    result = "<p style=\"color:red\">You LOSE!</p>"
  }
  response.write('<!DOCTYPE html>\n<html><title>The Grand Result</title><body>');
  if (call === "heads" || call === "tails") {
    response.write('<h3>The Grand Result</h3>')
    response.write('You called ' + call + '.  It\'s ' + flip + '.  <b>' + result + '</b>');
  } else {
    response.write('<h3>Derp</h3>')
    response.write('You called ' + call + ', which is neither heads nor tails, so of course you lose.');
  }
  response.end('</body></html>');
});

server.listen(3000);
