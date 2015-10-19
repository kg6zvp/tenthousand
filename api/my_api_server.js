var http = require('http');

http.createServer(function (req, res) {
	/** if statement about url name */
  res.writeHead(200, {'Content-Type': 'text/plain'});
  /** send engine a dictionary of queries, etc. */ 
  res.end('Hello World\n');
}).listen(8081);

console.log('Server running on port 8081.');

