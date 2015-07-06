function celebrityID(){
	var celebrityID = 999; 
	//We are returning an object with some inner functions 
	//All the inner functions have access to the outer function's variables 
	return {
		getID: function(){
			//This inner function will return the UPDATED celebrity ID variable 
			//IT will return the current value of celebrityID, ever after the changeTheID function changes it 
			return celebrityID;
		}, 

		setID: function(theNewID){
			celebrityID = theNewID;
		}
	}
}

var mjID = celebrityID(); 
var answer = mjID.getID(); 
mjID.setID(567); 
var answer2 = mjID.getID();
mjID.setID(234234234234234234234234)
var answer3 = mjID.getID();
console.log(answer);
console.log(answer2); 
console.log(answer3);

function thisMessage(){
	var message = "In this message I wish to say... ";

	return {
		get : function(){
			return message; 

		}, 

		set: function(addMessage){
			message = message += addMessage;
		},
		print: function(){
			console.log(message)
		},

		delete: function(){
			message -= message; 
			message = "In this message I wish to say... ";
		}
	}
}

var message = thisMessage(); 
message.set("this is so cool!");
message.print()
message.set("OMG I AM PROGRAMMING!")
message.print();
message.delete(); 
message.set("This is a new message! FUCK YES!")
message.print();
message.delete(); 
message.set("And I can just keeping setting messages just like this")
message.print();