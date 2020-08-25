const SocketIO = require('socket.io');

class RoomQueue {
    constructor() {
      this.room = [];
      this.fillInt();
    }
    
    fillInt(){
        for(var i=1; i<=1000; i++){
            this.enqueue(i);
        }
    }

    enqueue(item) {
      this.room.push(item);
    }
    
    dequeue() {
      let entry = 0;
      this.room.forEach((item, index) => {
        if (this.room[entry].score < this.room[index].score) {
          entry = index;
        }
      });
      return this.room.splice(entry, 1);
    }
}


//const RoomQueue = require('./roomIndex');
module.exports = function( _server ){
    const io = SocketIO( _server, {path: '/socket.io'});
    var roomQueue = new RoomQueue;
    io.on("connection", function(socket){
        console.log("=====Socket Connected=====");
        const req = socket.request;
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        var info = {};

        const promiseUser = new Promise((resolve, reject) =>{
            socket.on('matching', (A, B) => {
                info.user1 = A;
                info.user2 = B;
                info.room = roomQueue.dequeue();
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

            if(io.nsps['/'].adapter.rooms["room-"+roomIdx] 
                && io.nsps['/'].adapter.rooms["room-"+roomIdx].length > 1){
                socket.join(room[roomIdx], () => {
                    console.log(roomIdx+ ' created');
                    io.to(room[roomIdx]).emit('joinRoom', roomIdx);
                });
            }
        })
        .catch((err)=>{
            socket.on("error", function(error){
                console.log("socketErr : "+error);
            });
            console.log("socketErr : "+err);
        });

        // const promiseUser1 = new Promise((resolve, reject) =>{
        //     socket.on('user1', (name) => {
        //         user1 = name;
        //         resolve(user1);
        //         reject(new Error("User1 is undefined"));
        //     });
        // });
        // const promiseUser2 = new Promise((resolve, reject) =>{
        //     socket.on('user2', (name) =>{
        //         user2 = name;
        //         resolve(user2);
        //         reject(new Error("User2 is undefined"));
        //     });
        // })


        // promiseUser1
        // .then(function(userInfo){
        //     user1 = userInfo;
        //     console.log("user 1 : "+user1+" socket connected");
        //     // Server To Client MSG
        //     socket.emit('STC', "Hello "+user1);
        // })
        // .catch((err)=>{
        //     socket.on("error", function(error){
        //         console.log("socketErr : "+error);
        //     });
        //     console.log("socketErr : "+err);
        // });


        console.log(ip+"의 새로운 유저 접속");
        // //room
        // var socketRoom = {};
        // socket.on('requestEnterRoom', function(data){
        //     console.log('requestEnterRoom');
        //     var rooms = io.sockets.manager.rooms;

        //     for (var key in rooms){
        //         if (key == ''){
        //             continue;
        //         }
        //         // 혼자있으면 입장
        //         if (rooms[key].length == 1){
        //             var roomKey = key.replace('/', '');
        //             socket.join(roomKey);
        //             io.sockets.in(roomKey).emit('completeMatch', {});
        //             socketRoom[socket.id] = roomKey;
        //             return;
        //         }
        //     }

        //     // 빈방이 없으면 혼자 방만들고 기다림.
        //     socket.join(socket.id);
        //     socketRoom[socket.id] = socket.id;
        // })

        // // client -> server Message전송 시
        // socket.on('sendMessage', function(data){
        //     console.log('sendMessage!');
        //     io.sockets.in(socketRoom[socket.id]).emit('receiveMessage', data);
        // });

        // socket.on("disconnect", function(){
        //     console.log("disconnect : ");
        //     var key = socketRoom[socket.id];
        //     socket.leave(key);
        //     io.sockets.in(key).emit('disconnect');
        //     var clients = io.sockets.clients(key);
        //     for (var i = 0; i < clients.length; i++){
        //         clients[i].leave(key);
        //     }
        // });

        socket.on("ms", function(data){
            console.log("메시지 수신 : "+data);
        });
    });

}