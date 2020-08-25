import Game from "./controller/Game.js";

const game = new Game();

function getQuery(){
    var query = document.location.href.split('?')[1]; // query in URL
    var user1Query = query.split('&')[0];
    var user2Query = query.split('&')[1];
    var user1 = user1Query.split('=')[1];
    var user2 = user2Query.split('=')[1];
    return {
        user1: user1,
        user2: user2
    };
}

$(document).ready(function(){
    console.log("=====document ready=====");
    const userInfo = getQuery();
    var socket = io.connect("http://localhost:3000", {
        path: "/socket.io"
    });
    
    socket.emit("matching", userInfo.user1, userInfo.user2);
    //socket.emit("user2", userInfo.user2);
    
    //Server To Client  Msg
    socket.on('STC', function(data : string){
        console.log("server : ");
        writeToScreen("받은 메시지 : "+data);
    });
    
    function sendToMessage(message : string){
        socket.emit("ms", message);
    };
    
    function writeToScreen(message : string){
        console.log(message);  
    }

})