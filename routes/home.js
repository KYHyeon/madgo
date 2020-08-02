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
  console.log(req.body);
  console.log(user);
  res.render('login', {username: user});
})
router.use('/user', user_auth);


router.use('/admin', authMiddleware);
router.use('/admin', admin_auth);


 
  //router.redirect('/user/register')
  //.then(router.redirect('/user/login'));

  /* information of Login User */
  // let body = req.body;
  // let password = body.password;
  // let username = body.username;


  // fs.readFile(__dirname + "/../app_data/user.json", "utf8", function (err, data) {
  //   var users = JSON.parse(data);
  //   var result = {};

  //   /* Not detected User */
  //   if (!users[username]) {
  //     console.log("not exist user");
  //     result["success"] = 0;
  //     result["error"] = "not found";
  //     res.json(result);
  //     res.redirect('/home');
  //     return;
  //   }

  //   if (users[username]["password"] == password) {
  //     result["success"] = 1; 
  //     sess = req.session;
  //     sess.username = username;
  //     //sess.name = users[username]["name"];
  //     console.log("same password");
  //     console.log(sess);
  //     console.log(sess.username);
  //     //res.json(result);
  //     req.session.save(() => {
  //       res.redirect('/home');
  //     });
  //   } else {  // wrong pw
  //     result["success"] = 0;
  //     result["error"] = "incorrect";
  //     //res.json(result);
      
  //     res.redirect('/home');
  //   }
  // });
  
//})



// router.post('/login', function (req, res) {
//   /* information of Login User */
//   res.redirect('/home');
// })

// router.post('/logout', function (req, res) {
//   res.redirect('/home');
// })

// router.post('/register', function (req, res){
//   res.send('register');
// })

module.exports = router;