var gethttp = require('http');

gethttp.get(process.argv[2], function(response) {
  response.setEncoding("utf8");
  response.on("data", function(data) {
    console.log(data);
  });
  response.on("error", function(error) {
    console.log(error);
  });
});
