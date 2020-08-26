// import Game from "./controller/Game.js";

import { isEmptyObject } from "jquery";

// const game = new Game();

// function getQuery(){
//     var query = document.location.href.split('?')[1]; // query in URL
//     // var roomQuery = query.split('&')[0];
//     // var user1Query = query.split('&')[1];
//     // var user2Query = query.split('&')[2];
//     var [roomQuery, user1Query, user2Query] = query.split('&');
//     var user1 = user1Query.split('=')[1];
//     var user2 = user2Query.split('=')[1];
//     var room = roomQuery.split('=')[1];
//     return {
//         room : room,
//         user1: user1,
//         user2: user2
//     };
// }

// $(document).ready(function(){
//     console.log("=====document ready=====");
//     const userInfo = getQuery();
//     var socket = io.connect("http://localhost:3000", {
//         path: "/socket.io"
//     });
    
//     socket.emit("matching", userInfo.user1, userInfo.user2, userInfo.room);
//     //socket.emit("user2", userInfo.user2);
//     sendToMessage("hello")
//     //Server To Client  Msg
//     socket.on('STC', function(data : string){
//         console.log("server : ");
//         writeToScreen("받은 메시지 : "+data);
//     });
//     function sendToMessage(message : string){
//         socket.emit("messageToRoom", message);
//     };
    
//     function writeToScreen(message : string){
//         console.log(message);  
//     }

// })

<<<<<<< Updated upstream
const game = new Game();
=======

function getQuery(){
    var query = document.location.href.split('?')[1]; // query in URL
    // var roomQuery = query.split('&')[0];
    // var user1Query = query.split('&')[1];
    // var user2Query = query.split('&')[2];
    var [roomQuery, user1Query, user2Query] = query.split('&');
    var user1 = user1Query.split('=')[1];
    var user2 = user2Query.split('=')[1];
    var room = roomQuery.split('=')[1];
    return {
        room : room,
        user1: user1,
        user2: user2
    };
}

$(document).ready(function(){
    msgOut("gooo");
    console.log("=====document ready=====");
    const userInfo = getQuery();
    var socket = io.connect("http://localhost:3000", {
        path: "/socket.io"
    });
    socket.emit("matching", userInfo.user1, userInfo.user2, userInfo.room);
    //socket.emit("user2", userInfo.user2);
    //Server To Client  Msg
    socket.on('messageByRoom', function(data : string){
        console.log("Room say: "+data);
        //writeToScreen("받은 메시지 : "+data);
        msgOut(data);
    });
    function sendToMessageServer(message : string){
        socket.emit("messageToServer", message);
    };
    
    function writeToScreen(message : string){
        console.log(message);  
    }

    function sendToMessageRoom(message : string){
        socket.emit('messageToRoom', message);
        // socket.emit("messageToRoom", message);
    }

    $('#sendBtn').click(function(){
        var msg = $('#msg').val();
        console.log(msg);
        sendToMessageRoom(msg+'');
    })

})
function msgOut(msg : string){
    $("#chatList > ul").append(
        `
        <li>
            ${msg}
        </li>
        `
    )
}

>>>>>>> Stashed changes
