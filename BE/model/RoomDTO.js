const { v4 : uuidv4 } = require('uuid');

class RoomDTO{
    room;
    roomNumber;

    constructor() {
        this.room = new Map();
        this.roomNumber = new Map();
    }

    searchByUser(user){
        // has -> value / hasn't  undefined
        return this.room.get(user);
    }
    searchByRoom(room){
        return this.roomNumber.get(room);
    }

    delete(user1, user2, room){
        this.room.delete(user1);
        this.room.delete(user2);
        this.roomNumber.delete(room);
        console.log(user1+'&'+user2+' exit');
    }

    enter(user1, user2, room){
        this.room.set(user1, room);
        this.room.set(user2, room);
        this.roomNumber.set(room, {user1, user2});
        console.log(user1+'&'+user2+' enter');
    }

    information(){
        for(let [key, value] of this.roomNumber){
            console.log(key + ' = ' + value.user1+' , '+value.user2);
        }
    }
    nextRoomNumber(){
        return uuidv4();
    }

    destroyRoom(room){
        var room
    }
}
module.exports = RoomDTO;