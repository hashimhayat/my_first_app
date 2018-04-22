var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hashim Hayat' });
});

router.get('/profile', function(req, res, next){
	res.render('profile', {name: "Hashim", age: "21", school: "NYU Abu Dhabi", year: "2018"});
});

module.exports = router;
