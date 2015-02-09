var Monster = function(size, color, breed, weapon, hitPoints, experience) {
	this.size = size; 
	this.color = color; 
	this.breed = breed; 
	this.weapon = weapon; 
	this.hitPoints = hitPoints; 
	this.experience = experience; 

	if (this.breed === "Dragon") {
		this.breathesFire = true;
	} else {
		this.breathsFire = false; 
	}
};

var Monster = function(size, color, breed, weapon) {
	this.size = size; 
	this.color = color; 
	this.breed = breed; 
	this.weapon = weapon; 
	this.hitPoints = hitPoints; 

	if (this.breed === "dragon") {
		this.breathesFire = true;
	} else {
		this.breathesFire = false; 
	}; 

	if (this.size === "tiny") {
		this.hitPoints = 25;
	} else if (this.size === "medium") {
		this.hitPoints = 50; 
	} else if (this.size === "large") {
		this.hitPoints = 100;
	} else {
		this.size === "75";
	};
};

var Dragon = new Monster("tiny", "green", "dragon", "mouth"); 

var Ogre = new Monster("medium", "brown", "ogre", "club");

var Fairy = new Monster("tiny", "pink", "fairy");  