var express = require('express');
var router = express.Router();
const authMiddleware = require('./authentication/middlewares/auth');
const admin_auth = require('./admin');
const user_auth = require('./authentication');

router.get('/', (req, res) => {
  console.log("======================");
  console.log(res.params);
  console.log("home main : ");
  console.log(req.query);
  console.log(req.query.Login);
  var login = req.query.Login;

  if(login === undefined){  // main
    console.log("------------");
    res.render('login', {username : ''});
  }
  // else if(login === 'Fail'){  // No Exist User
  //   console.log("========");
  //   console.log(req);
  //   console.log(res);
  //   res.render('login', {username : login});
  // }
  else{
    res.render('logout',{username : login})
  }

});
router.post('/', (req,res) => {
  var user = req.body.username;
  console.log("POST : ",req.body);
  console.log("POST : ",user);
  res.render('login', {username: user});
})
router.use('/user', user_auth);


router.use('/admin', authMiddleware);
router.use('/admin', admin_auth);



module.exports = router;