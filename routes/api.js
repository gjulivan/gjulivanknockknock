var express = require('express');
var router = express.Router();
var {fibonacci} = require('../src/fibonacci');
var {getTriangleType} = require('../src/triangletype');

/* GET home page. */
router.get('/Fibonacci', function(req, res, next) {
	 let num = req.query.n-1;
	 let fibNum = 1;
	 if(num>=0){
	   fibNum = fibonacci(num);	
	 }
	 
 	 res.json(fibNum);
});

router.get('/ReverseWords', function(req, res, next) {
	 let stringInput = req.query.sentence
	 
 	 res.json(stringInput.split("").reverse().join(""));
});


router.get('/Token', function(req, res, next) {
	 
 	 res.json("e4e851f7-8821-4bf0-836b-c0c01e01dab7");
});

router.get('/TriangleType', function(req, res, next) {
	  let a = parseInt(req.query.a);
	  let b = parseInt(req.query.b);
	  let c = parseInt(req.query.c);

	  res.json(getTriangleType(a,b,c));
});


//

module.exports = router;
