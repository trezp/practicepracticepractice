//This example is explained in detail below

function celebrityIDCreator(TheCelebrities){
	var i; 
	var uniqueID = 100; 
	for (i = 0; i < TheCelebrities.length; i++){
		TheCelebrities[i]["id"] = function(j){ 
				return uniqueID + j 
		}(i); 
	}
	return TheCelebrities; 
}

var actionCelebs = [{name: "Stallone", id:0}, {name: "Cruise", id: 0}, {name: "Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator(actionCelebs);

var stalloneID = createIdForActionCelebs[0];
console.log(stalloneID.id);

var cruiseID = createIdForActionCelebs[1]; 
console.log(cruiseID.id);


function numberedList(theList){
	var index; 
	var listItemNum = 0;
	for (index = 0; index < theList.length; index++){
		theList[index]["id"] = function(jIndex){return function(){return listItemNum + jIndex}()}(index)
	}
	return theList; 
}

// var stuffList = [{fruit: "apples", id: 0}, {fruit: "oranges", id: 0},{fruit: "potatoes", id: 0},{fruit: "shallots", id: 0},{fruit: "onions", id: 0},];
// var listWithNumbers = numberedList(stuffList); 
// var appleID = listWithNumbers[0];
// console.log(appleID.fruit + ': ' + appleID.id)


