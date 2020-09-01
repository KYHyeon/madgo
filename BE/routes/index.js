var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //TODO : next 콜백함수 없음.
  console.log("user 1 : "+ req.query.user1);
  console.log("user 2 : "+ req.query.user2);
  res.render('index.html');
});

/* TEST */
router.get('/test', function(req, res, next) {
  res.render('test',{});
});


module.exports = router;
