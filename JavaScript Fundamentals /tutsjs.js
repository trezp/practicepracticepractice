(function() {
// var divFoo = document.getElementById("foo"), //selecting a CSS element
// 	style = divFoo.style; //assigning variable.style and assigning to a style variable

// divFoo.className = "css-class"; //assigning a CSS class to the element
// // divFoo.className = divFoo.classname.replace(" css-class2 ", ""); //removes the css class
// // divFoo.classList.toggle("css-class"); //not supported?
// //var color = window.getComputedStyle(divFoo, null).getPropertyValue("color");




// var getStyle = function(el, cssProperty){
// 	if (typeof getComputedStyle !== "undefined"){
// 		return window.getComputedStyle(el, null).getPropertyValue(cssProperty);
// 		} else {
// 			return el.currentStyle[cssProperty];
// 		}

// };

// var color = getStyle(divFoo, "color");
// alert(color);
	// //alert(style.color); //selecting elements and changing styles
	// var speed = 10, 
	// 	moveBox = function(moveBy){
	// 		var el = document.getElementById("box"),
	// 			left = el.offsetLeft;


	// 		if ((moveBy > 0 && left > 399) || (moveBy < 0 && left < 51)) {
	// 			clearTimeout(timer);
	// 			timer = setInterval(function(){
	// 				moveBox(moveBy * -1); //reverses the value
	// 			}, speed); 
	// 		}
	// 		el.style.left = left + moveBy + "px";

	// };
	// var timer = setInterval(function (){
	// 	moveBox(3); //anon function calls the moveBox function
	// }, speed); //bouncing box
//var el = document.getElementById("box");

// el.onclick = function(){
// 	this.style.backgroundColor = "red";

// }; //change color of a box

// var buttons = document.getElementsByTagName("button"); 

// var buttonClick = function(){
// 	var changeStuff = this.innerHTML.toLowerCase(); 

// 	document.body.className = changeStuff;
// }

// for (var i = 0, len = buttons.length; i < len; i++){
// 	// buttons[i].onclick = function(){
// 	// 	var changeStuff = this.innerHTML.toLowerCase();

// 	// 	document.body.className = changeStuff; 
// 	// }

// 	buttons[i].addEventListener("click", buttonClick, false);

// }
var buttons = document.getElementsByTagName("a");

var buttonClick = function(evt) {
    var target = eventUtility.getTarget(evt),
        className = target.innerHTML.toLowerCase();
        
    eventUtility.preventDefault(evt);
    
    document.body.className = className;
};

for (var i = 0, len = buttons.length; i < len; i = i + 1) {
    eventUtility.addEvent(buttons[i], "click", buttonClick);   
    //removeEvent(buttons[i], "click", buttonClick);    
    
}

 }());