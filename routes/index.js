var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //TODO : next 콜백함수 없음.
  res.render('index.html');
});

module.exports = router;
