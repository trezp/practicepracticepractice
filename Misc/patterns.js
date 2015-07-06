function Car(model, year, miles){
	this.model = model; 
	this.year = year; 
	this.miles = miles;
}

Car.prototype.toString = function(){
	return "This " + this.model + " has done " + this.miles + " miles"; 
}

var civic = new Car("Honda Civic", 2009, 20000)
var mondeo = new Car("Ford Mondeo", 2010, 5000)

console.log(civic.toString()); 
console.log(mondeo.toString());

function celebrityCrush(name, project,reason){
	this.name = name; 
	this.project = project; 
	this.reason = reason; 
};


celebrityCrush.prototype.whyLove = function(){
	return "I love " + this.name + " from " + this.project + " because " + this.reason + "."; 
}

var matt = new celebrityCrush("Matt Smith", "Doctor Who", "he's so handsome");

var david = new celebrityCrush("David Tennant", "Broadchurch", "he has googly eyes")


function printCrush(crush){
	console.log(crush.whyLove())
}

printCrush(david)
printCrush(matt)

var david = {
	name : "David Tennant",
	age : 44, 
	majorWorks : { movies: ["Harry Potter","What We Did On Our Holiday"],
				   television: ["Doctor Who","Broadchurch"]
	},

	saying : function (){
		console.log(this.name + " says Allons-y!")
	}, 

	saying2: function(){
		console.log(this.name + " says I don't want to go.")
	}
}

console.log(david.name)

console.log(david.majorWorks.movies)
console.log(david.majorWorks.television)
console.log(david.saying()); 
console.log(david.saying2());