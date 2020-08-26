const SocketIO = require('socket.io');

module.exports = function( _server ){
    const io = SocketIO( _server, {path: '/socket.io'});
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
    io.on("connection", function(socket){
        const req = socket.request;
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
<<<<<<< Updated upstream
        var user1;
        socket.on('user1', (name)=>{
            user1 = name;
        })

        console.log(ip+"의 새로운 유저 접속");
        socket.emit('STC', "Hello"+user1);

        //room
        var socketRoom = {};
        socket.on('requestEnterRoom', function(data){
            console.log('requestEnterRoom');
            var rooms = io.sockets.manager.rooms;

            for (var key in rooms){
                if (key == ''){
                    continue;
                }
                // 혼자있으면 입장
                if (rooms[key].length == 1){
                    var roomKey = key.replace('/', '');
                    socket.join(roomKey);
                    io.sockets.in(roomKey).emit('completeMatch', {});
                    socketRoom[socket.id] = roomKey;
                    return;
                }
            }

            // 빈방이 없으면 혼자 방만들고 기다림.
            socket.join(socket.id);
            socketRoom[socket.id] = socket.id;
        })

        // client -> server Message전송 시
        socket.on('sendMessage', function(data){
            console.log('sendMessage!');
            io.sockets.in(socketRoom[socket.id]).emit('receiveMessage', data);
        });

        socket.on("disconnect", function(){
            console.log("disconnect : ");
            var key = socketRoom[socket.id];
            socket.leave(key);
            io.sockets.in(key).emit('disconnect');
            var clients = io.sockets.clients(key);
            for (var i = 0; i < clients.length; i++){
                clients[i].leave(key);
            }
        });
        
        socket.on("error", function(error){
            console.log("error : "+error);
        });

=======
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
>>>>>>> Stashed changes
        socket.on("ms", function(data){
            console.log("메시지 수신 : "+data);

            socket.emit("echo", data);
        });
    });

}