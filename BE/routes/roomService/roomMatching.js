const _server = require('../socket/server');
const UserManager = require('../../model/UserManager');

const userManager = new UserManager();

exports.matching = (req, res) => {
    
    // query.user1 & query.user2
    let user1 = req.query.user1;
    let user2 = req.query.user2;
    
    console.log(user1);
    console.log(user2);
    console.log("Room Information");
    userManager.showInformation();
    res.render('testChat.html');
    //res.render('index.html');
}

// function checkCookieForJWT(req){
//     return req.cookies
// }