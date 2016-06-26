'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.disable('x-powered-by');
app.use( express.static('./dist/') );
app.use( bodyParser.urlencoded({extended: true}) );

app.get('/test', testFn);
app.post('/test', testFn);

function testFn(req, res, next) {
	/*console.log('=========================');
	console.log( req.body );
	console.log( req.query );
	console.log( req.params );
	console.log('=========================');*/
	res.json({ code: 200, data: ['a', 234, {a: 1, b: 'a'}, ['a', 2]], method: req.method });
}


app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).json({ code: 500, msg: '500 - Server Error.' });
}).use(function(req, res) {
	res.status(404).json({ code: 404, msg: '404 - Not Found.' });
});

var listener = app.listen('8000', function() {
	console.log( 'Express server started. Content: '+app.get('env')+'. Port: '+listener.address().port );
});