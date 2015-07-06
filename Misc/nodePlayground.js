var events = require('events'); //require events 
var eventEmitter = new events.eventEmitter(); //create a new instance 

var homeRun = function(){
	console.log("Home Run!");
}

//Register an event for 'swing'
eventEmitter.on('swing', homeRun); 

//Ball pitched, so let's emit a swing 
eventEmitter.emit('swing');