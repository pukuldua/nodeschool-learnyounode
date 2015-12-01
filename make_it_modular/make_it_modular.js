var filters = require('./modfilterls.js');

filters(process.argv[2], process.argv[3], function(err, files) {
  if (err)
  return console.error('There was an error:', err);

  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});
