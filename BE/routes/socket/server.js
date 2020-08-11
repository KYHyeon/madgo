const SocketIO = require('socket.io');

module.exports = function( _server ){
    const io = SocketIO( _server, {path: '/socket.io'});

    io.on("connection", function(socket){

        const req = socket.request;
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log(ip+"의 새로운 유저 접속");

        socket.on("disconnect", function(){
            console.log("접속 해제");
        });
        
        socket.on("error", function(error){
            console.log("error : "+error);
        });

        socket.on("ms", function(data){
            console.log("메시지 수신 : "+data);

            socket.emit("echo", data);
        });
    });

}