var catName = document.getElementById("catname");
var catNames = document.getElementsByClassName("catnames");
var catPics = document.getElementById("catpics");
var count = document.getElementById('count');


//cat list
var chewy = "<img src=\"images/chewy.jpg\">"
var elmer = "<img src=\"images/elmer.jpg\">"
var jody = "<img src=\"images/jody.jpg\">"
var layla = "<img src=\"images/layla.jpg\">"
var lucifer = "<img src=\"images/lucifer.jpg\">"


var cats = [chewy, elmer, jody, layla, lucifer]

var tally = 0;
for(i = 0; i < cats.length; i++){
	cat = cats[i];
	tally = tally + 1
	count.innerHTML = tally;
	catpics.innerHTML = cat;

	
	catList.addEventListener('click', (function(cat){
		return function(){
			return cat;
		};
	})(cat));
		
	
};


