var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res){
	res.render('index', {
		title: "All about me!",
		name: "Treasure", 
		age: "34", 
		job: "Web Developer",
		animal: "kitten",
		legs: 4,
		noise: "mewwwwww",
		asAPet: "wonderful"
	});
});

router.get('/david-tennant', function(req, res){
	res.render('index', {
		title: "I am reusing a template!",
		name: "David Tennant", 
		age: "44", 
		job: "Actor"
	});
});

router.get('/users/:id', function(req, res){
	console.log(req.params);
	res.send(req.params.id, 200);
});
module.exports = router;
