var express = require('express');
var router = express.Router();
const session = require('express-session');
const FileStore = require('session-file-store')(session);
var fs = require('fs');

router.use(session({
  secret: 'MCtheMax',
  resave: false,
  saveUninitialized: true
}))

router.get('/', (req, res) => {
  console.log("======================");
  console.log(req.params);
  sess = req.session;
  console.log("home main : ");
  console.log(sess);
  if(!sess.username){
    sess.username = "";
    res.render('login', {
      username: sess.username
    });
  }
  else if (sess.username != ""){
    res.render('logout',{
      username: sess.username
    });
  }  
});


router.post('/login', function (req, res) {

  /* information of Login User */
  let body = req.body;
  let password = body.password;
  let username = body.username;
  console.log(body);
  fs.readFile(__dirname + "/../app_data/user.json", "utf8", function (err, data) {
    var users = JSON.parse(data);
    var result = {};

    /* Not detected User */
    if (!users[username]) {
      console.log("not exist user");
      result["success"] = 0;
      result["error"] = "not found";
      res.json(result);
      res.redirect('/home');
      return;
    }

    if (users[username]["password"] == password) {
      result["success"] = 1; 
      sess = req.session;
      sess.username = username;
      //sess.name = users[username]["name"];
      console.log("same password");
      console.log(sess);
      console.log(sess.username);
      //res.json(result);
      req.session.save(() => {
        res.redirect('/home');
      });
    } else {  // wrong pw
      result["success"] = 0;
      result["error"] = "incorrect";
      //res.json(result);
      
      res.redirect('/home');
    }
  });
  
})

router.post('/logout', function (req, res) {
  sess = req.session;
  if (sess.username) {
    req.session.destroy(function (err) {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/home');
      }
    })
  } else {
    res.redirect('/home', {reg_error:'password'});
  }
})






// router.get('/getUser/:username', function(req,res){
//   fs.readFile(__dirname + "/../app_data/" +  "user.json", 'utf8', function (err, data){
//     var users = JSON.parse(data);
//     res.json(users[req.params.username]);
//   });
// })

// router.post('/addUser/:username', function(req, res){

//   var result = {  };
//   var username = req.params.username;

//   // CHECK REQ VALIDITY
//   if(!req.body["password"] || !req.body["name"]){
//       result["success"] = 0;
//       result["error"] = "invalid request";
//       res.json(result);
//       return;
//   }

//   // LOAD DATA & CHECK DUPLICATION
//   fs.readFile( __dirname + "/../app_data/user.json", 'utf8',  function(err, data){
//       var users = JSON.parse(data);
//       if(users[username]){
//           // DUPLICATION FOUND
//           result["success"] = 0;
//           result["error"] = "duplicate";
//           res.json(result);
//           return;
//       }

//       // ADD TO DATA
//       users[username] = req.body;

//       // SAVE DATA
//       fs.writeFile(__dirname + "/../app_data/user.json",
//                    JSON.stringify(users, null, '\t'), "utf8", function(err, data){
//           result = {"success": 1};
//           res.json(result);
//       })
//   })
// });

// router.put('/updateUser/:username', function(req, res){

//   var result = {  };
//   var username = req.params.username;

//   // CHECK REQ VALIDITY
//   if(!req.body["password"] || !req.body["name"]){
//       result["success"] = 0;
//       result["error"] = "invalid request";
//       res.json(result);
//       return;
//   }

//   // LOAD DATA
//   fs.readFile( __dirname + "/../app_data/user.json", 'utf8',  function(err, data){
//       var users = JSON.parse(data);
//       // ADD/MODIFY DATA
//       users[username] = req.body;

//       // SAVE DATA
//       fs.writeFile(__dirname + "/../app_data/user.json",
//                    JSON.stringify(users, null, '\t'), "utf8", function(err, data){
//           result = {"success": 1};
//           res.json(result);
//       })
//   })
// });

// router.delete('/deleteUser/:username', function(req, res){
//   var result = { };
//   //LOAD DATA
//   fs.readFile(__dirname + "/../app_data/user.json", "utf8", function(err, data){
//       var users = JSON.parse(data);

//       // IF NOT FOUND
//       if(!users[req.params.username]){
//           result["success"] = 0;
//           result["error"] = "not found";
//           res.json(result);
//           return;
//       }

//       delete users[req.params.username];
//       fs.writeFile(__dirname + "/../app_data/user.json",
//                    JSON.stringify(users, null, '\t'), "utf8", function(err, data){
//           result["success"] = 1;
//           res.json(result);
//           return;
//       })
//   })

// })
module.exports = router;