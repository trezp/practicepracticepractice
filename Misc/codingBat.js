function nCopies(str, n){
	var newString = '';
	for(var i = 0; i < n; i++){
		newString += str;

	}
	console.log(newString)
}

// nCopies("All work and no play makes Jack a Dull Boy", 500); 

function frontStr(str, n){
	var newString = '';
	var sliced = str.slice(0,3)
	for(var i = 0; i < n; i++){
		newString += sliced;
	}
	console.log(newString);
}

// frontStr("Treasure", 5)
// frontStr("Hi", 10)
// frontStr("Chocolate", 2)
// frontStr("Chocolate", 3)
// frontStr("Abc", 3)

function stringBits(str){
	var newString = ''; 
	for(var i = 0; i < str.length; i++){
		if(i % 2 === 0){
			newString += str[i];
		}
	}
	 console.log(newString);
}

stringBits("Heeololeo")
stringBits("Hdihmiykneaemeebissttrreeaassuurree")


function numCounter(arr){
	if()
}