const SocketIO = require('socket.io');

module.exports = function( _server ){
    const io = SocketIO( _server, {path: '/socket.io'});
    io.on("connection", function(socket){
        const req = socket.request;
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        var info = {};
        var roomGlobal ;
        const promiseUser = new Promise((resolve, reject) =>{
            socket.on('matching', (user1, user2, room) => {
                info.user1 = user1;
                info.user2 = user2;
                info.room = room;
                roomGlobal = room;
                //info.room = roomQueue.dequeue();
                resolve(info);
                reject(new Error("matching Error"));
            });
        });

        // socket.on('leaveRoom', (roomIdx) =>{
        //     socket.leave(room[roomIdx], () =>{
        //         console.log(roomIdx+' destroyed');
        //         io.to(room[roomIdx]).emit('leaveRoom', roomIdx);
        //     });
        // });
        
    
        promiseUser
        .then(function(info){
            const roomIdx = info.room;
            const user1 = info.user1;
            const user2 = info.user2;
            console.log("user 1 : "+user1+" socket connected");
            console.log("user 2 : "+user2+" socket connected");
            console.log("matching - room : "+ roomIdx);

            
            io.to(roomIdx).emit('hi');
            
        })
        .catch((err)=>{
            socket.on("error", function(error){
                console.log("socketErr : "+error);
            });
            console.log("socketErr : "+err);
        });


        console.log(ip+"의 새로운 유저 접속");
        socket.on('messageToRoom', (msg) => {
            console.log(roomGlobal);
            socket.join(roomGlobal);
            io.to(roomGlobal).emit('messageByRoom', msg);
        })
        socket.on("ms", function(data){
            console.log("메시지 수신 : "+data);

            socket.emit("echo", data);
        });
    });

}