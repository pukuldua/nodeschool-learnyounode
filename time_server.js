var net = require('net');

function zeroPrefix(data) {
	if(data < 10)
		return '0' + data;
	else
		return data;
}

function current() {
	var dt = new Date();
	var dtformat = dt.getFullYear() + '-' 
	+ zeroPrefix(dt.getMonth() + 1) + '-' 
	+ zeroPrefix(dt.getDate()) + ' ' 
	+ zeroPrefix(dt.getHours()) + ':' 
	+ zeroPrefix(dt.getMinutes());

	return dtformat; 
}

var server = net.createServer(function (socket) {
	var data = current() + '\n';
	socket.end(data);
});
server.listen(Number(process.argv[2]));