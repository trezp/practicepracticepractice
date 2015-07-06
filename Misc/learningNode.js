//http is a module 
var http = require("http"), 
	//port we want our server to run on 
	port = 1234; 
//request is the data when the call is made to the server, response is the data that leaves 
//from the server 
var server = http.createServer(function(request, response){
	//the header describes the content we're sending 
	response.writeHeader(200, {"Content-Type": "text/plain"});
	response.write("Hello HTTP!");
	//tells the server that the operation is complete 
	response.end();
});

//initializing the server and asking it to listen to the specified port(listen is essentially
	//waiting for things to happen)
server.listen(port); 
console.log("Server Running on " + port + ".\nLaunch http://localhost:" + port );