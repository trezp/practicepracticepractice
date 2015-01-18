var catclick1 = document.getElementById("catclick1");
var catclick2 = document.getElementById("catclick2");
var count1 = document.getElementById("count1").innerHTML;
var count2 = document.getElementById("count2").innerHTML;
var catname1 = document.getElementById("catname1");
var catname1 = document.getElementById("catname1");




var tally1 = 0
catclick1.addEventListener('click', function(){
	tally1 = tally1 + 1
	var result = document.getElementById('count1').innerHTML = tally1;
}, false)

var tally2 = 0
catclick2.addEventListener('click', function(){
	tally2 = tally2 + 1
	var result = document.getElementById('count2').innerHTML = tally2;
}, false)

var firstCatName = catname1.innerHTML = "Elmer "
var secondCatName = catname2.innerHTML = "Vladimir "