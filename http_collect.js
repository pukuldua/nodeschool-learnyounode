var http = require('http');
var bl = require('bl');
var concatStream = require('concat-stream');
var url = process.argv[2];

http.get(url, function(response) {
  response.pipe(concatStream(function(data) {
    result = data.toString();
    console.log(result.length);
    console.log(result);
  }));
});
