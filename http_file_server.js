var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
	response.writeHead(200, { 'content-type' : 'text/plain' });
	stream = fs.createReadStream(process.argv[3]);
	stream.pipe(response);
});
server.listen(Number(process.argv[2]));