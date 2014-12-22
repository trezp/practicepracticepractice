//    Toggles divs on and off  //
function toggleIt(id){
	var el = document.getElementById(id);
	if (el.style.display== "none") {
		el.style.display="block";
	} else {
		el.style.display="none";
	}	
};
//Toggles background color //
function changeBackground(){
	var javascript = document.getElementById("javascript");
	if (document.body.style.backgroundColor=="white") {
		document.body.style.backgroundColor="purple";
		javascript.style.color="white";
	} else {
		document.body.style.backgroundColor="white";
		javascript.style.color="black";
	}	
};

function changeColor(id){
	var el = document.getElementById(id);
	if (document.body.style.backgroundColor=="white") {
		el.style.color="black";
	} else if (document.body.style.backgroundColor=="purple") {
		el.style.color="white";
	}

}

// function multiColoredBox() {
// 	var el = document.getElementById(box)s
// }
//var hello = document.getElementById("hello"); 

// function sayHello(id){
// 	var el = document.getElementById(id);
// 	if (el.style.display== "none") {
// 		el.style.display="block";
// 	} else {
// 		el.style.display="none";
// 	}	
// };

// function sayHello(){
// 	document.getElementById("hello").style.display="block"
// };

// function sayGoodbye(){
// 	document.getElementById("hello").style.display="none"
// }

// hi.addEventListener('click', function(){
// 	sayHello(id);
// 	}, false);


//CLICK FOR PURPLE BACKGROUND//
// function changeBackground() {
// 	document.body.style.backgroundColor="purple";

// };

// purple.addEventListener('click', function(){
// 	changeBackground();
// }, false); 

//CLICK FOR YELLOW BOX//

// function showBox() {
// 	document.getElementById("yellowBox").style.display="block";
// }

// yellow.addEventListener('click', function(){
// 	showBox();
// }, false);