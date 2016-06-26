'use strict';

var fs = require('fs');

fs.exists('./dist/shim', (exists) => {
  	if( exists ) return;
  	fs.mkdirSync('./dist/shim');
  	fs.createReadStream('./shim/shim.js').pipe( fs.createWriteStream('./dist/shim/shim.js') );
});