var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (request, response) {
	if(request.method != 'POST')
		return response.end('send me a POST');

	post = request.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase();
	}));

	post.pipe(response);
});
server.listen(Number(process.argv[2]));