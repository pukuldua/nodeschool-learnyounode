var fs = require('fs');
var pt = require('path');
var newfiles = [];

module.exports = function(dirname, filext, callback) {
  fs.readdir(dirname, function(err, files) {
  if (err)
  return callback(err);

  for (i = 0; i < files.length; i++) {
    if (pt.extname(files[i]) == '.' + filext)
      newfiles.push(files[i]);
  }

  callback(null, newfiles);
});
};
