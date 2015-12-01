var fs = require('fs');
var pt = require('path');

fs.readdir(process.argv[2], function(error, files) {
  for (i = 0; i < files.length; i++) {
    if (pt.extname(files[i]) == '.' + process.argv[3])
		console.log(files[i]);
  }
});
