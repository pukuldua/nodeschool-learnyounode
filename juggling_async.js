var http = require('http');
var concatStream = require('concat-stream');
var result = [];
var count = 0;
var countParam = process.argv.length - 2;

for(var i = 0; i < countParam; i++){
	getHttp(i);
}

function getHttp(index){
	http.get(process.argv[2 + index], function(response) {
	  response.pipe(concatStream(function(data) {
	  result[index] = data.toString();
	  count++;

	  if(count == countParam)
	  	printResult();
	   
	  }));
	});
}

function printResult(){
	for(var i = 0; i < result.length; i++)
		console.log(result[i]);
}