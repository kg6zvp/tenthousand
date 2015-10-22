var http = require('http');
//var engine = require('./engine');

var getTime = function (){
    var currentTime = new Date()
    return currentTime.getHours().toString() + ":" + currentTime.getMinutes().toString()
    + ":" + currentTime.getSeconds().toString();
}

http.createServer(function (req, res) {

	var dictionary = require('url').parse(req.url, true);
	var callback = dictionary.query.callback;
	/** if statement about url name */
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  
  //getTime: function () {
  
  /** send engine a dictionary of queries, etc. */ 
  var message = getTime().toString();
  res.end(callback+'("'+message+'")'); //'currentTime'
}).listen(8081);

console.log('Server running on port 8081.');

