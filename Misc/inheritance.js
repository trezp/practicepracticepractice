var Monster = function(size, color, breed, weapon) {
	this.size = size; 
	this.color = color; 
	this.breed = breed; 
	this.weapon = weapon; 

	if (size === "tiny") {
		this.hitPoints = 25;
	} else if (size === "medium") {
		this.hitPoints = 50; 
	} else if (size === "huge") {
		this.hitPoints = 100;
	} else {
		size = 75;
	};

	if (this.breed === "dragon") {
		this.breathesFire = true;
	} else {
		this.breathesFire = false; 
	}; 

	if (this.breed === "fairy") {
		    this.sound = "twinkle twinkle!";
		} else if (this.breed === "dragon") {
			this.sound = "firebreath!"
		} else if (this.breed === "ogre") {
			this.sound = "blarrrrrggghhh!"
		} else {
			this.sound = "hurggyburggg"
		};

	this.makeNoise = function(){
		var sound = this.sound;
		var loudSound = sound.toUpperCase(); 
		return "The " + this.breed + " says " + loudSound + "!"
	};

	this.attack = function(){
		return "The " + this.breed + " attacked you with its " + this.weapon + "!"
	}

};

var Dragon = new Monster("huge", "green", "dragon", "teeth"); 

var Ogre = new Monster("medium", "brown", "ogre", "club");

var Fairy = new Monster("tiny", "pink", "fairy", "wand");

var MelGibson = new Monster("tiny", "periwinkle", "pompous douche bag", "bad acting");

var Alien = new Monster("kinda big", "green", "alien", "probe"); 

Alien.probeSomeone = function() {
	return "You have been probed!";
	};
