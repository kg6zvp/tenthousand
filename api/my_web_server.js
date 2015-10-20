console.log('Server not running on port 8080.');
var express = require('express'),
	app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080);
console.log('Server running on port 8080.');
