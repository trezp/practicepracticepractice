var http = require('http');
var myServer = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type" : "text/html"});
	response.write("<b>Hello</b> World");
	response.end();
}); 



myServer.listen(3000);

console.log("Go to localhost:3000 on your browser");