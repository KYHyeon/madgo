const UserManager = require('../../model/UserManager');
const userManager = new UserManager();

exports.search = (req, res) => {
    // query.user1 & query.user2
    let user1 = req.query.user1;
    let user2 = req.query.user2;
    
    console.log(user1);
    console.log(userManager.roomInformationByUser(user1));
    if(checkWaitingRoom(user1, user2)){   // room으로
        var roomNumber = userManager.roomInformationByUser(user1);
        res.redirect('/home/room/matching?room='+roomNumber+'&user1='+user1+'&user2='+user2);
    }else{
        var roomNumber = userManager.getNewRoom();
        userManager.roomEnter(user1, user2, roomNumber);
        res.redirect('/home/room/matching?room='+roomNumber+'&user1='+user1+'&user2='+user2);
    }    
}

function checkWaitingRoom(user1, user2){
    result = false;
    if(userManager.roomInformationByUser(user1)) result = true;
    if(userManager.roomInformationByUser(user2)) result = true;
    return result;
}

// function checkCookieForJWT(req){
//     return req.cookies
// }