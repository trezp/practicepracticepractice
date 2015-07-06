var serialMaker = function(){
	//Produce an object that produces unique strings.
	//A unique string is made up of two parts: a prefix
	//and a sequence number. The object comes with methods for setting the prefix and sequence 
	//number, and a gensym method that produces unique strings. 

	var prefix = '';
	var seq = 0; 
	return {
		setPrefix: function(p){
			prefix = String(p);
		},

		setSeq: function(s){
			seq = s; 
		}, 
		gensym: function(){
			var result = prefix + seq; 
			seq += 1;
			return result; 
		}
	};
}

// var seqer = serialMaker(); 
// seqer.setPrefix('Q');
// seqer.setSeq(1000);
// var unique = seqer.gensym(); 
// console.log(unique)

// Function.method('curry', function(){
// 	var slice = Array.prototype.slice,
// 		args = slice.apply(arguments),
// 		that = this; 
// 	return function(){
// 		return that.apply(null, args.concat(arguments));
// 	};

// var fibonacci = function(n){
// 	return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2); 
// };

// for (var i = 0; i <= 10; i += 1){
// 	console.log('//' + i + ': ' + fibonacci(i)); 
// }

// var fibonacci = (function (){
// 	var memo = [0,1];
// 	var fib = function(n){
// 		var result = memo[n];
// 		if(typeof result !== 'number') {
// 			result = fib(n - 1) + fib(n - 2);
// 			memo[n] = result; 
// 		}
// 		return result; 
// 	};
// 	return fib; 

// }());

var testModule = function(){
	var counter = 0; 

	return {
		incrementCounter: function(){
			return ++counter 
		}, 

		resetCounter: function(){
			console.log("counter value prior to reset: " + counter)
			counter = 0
		},

		getCounter : function(){
			console.log(counter)
		}
	};
}();

// console.log(testModule.incrementCounter()); 
// console.log(testModule.resetCounter());
// console.log(testModule.incrementCounter()); 
// console.log(testModule.incrementCounter()); 
// console.log(testModule.getCounter());

var basketModule = (function(){
	var basket = [];
	function doSomethingPrivate(){
		 
	}
})