var catModel = [{
		name: "Chewy",
		clickCount: 0, 
	},{
		name: "Elmer",
		clickCount: 0,
	},{
		name: "Jody",
		clickCount: 0,
	},{
		name: "Layla",
		clickCount: 0,
	},{
		name: "Lucifer",
		clickCount: 0
	}]


var octopus = {
	getAllCats : function(){
		for(i = 0; i < catModel.length; i++){
			cat = cats[i];
		}
	}




}


var catView = function(){
	init: function(){
		var catName = document.getElementById("catname");
		var catNames = document.getElementsByClassName("catnames");
		var catPics = document.getElementById("catpics");
		var count = document.getElementById('count');
	}, 
	renderCatList: function(){

	},

	renderCat: function(cat){
		'<img src=' + cat + '>'
	}
}