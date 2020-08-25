const RoomDTO = require('./RoomDTO');
//var Map = require("collections/map");
class UserManager{
    /*
        front : unshift ->  <- shift
        end : push ->  <- pop
    */
    roomDTO;
    constructor() { //: number
        if(!UserManager.instance){
            this.roomDTO = new RoomDTO();
            UserManager.instance = this;
        }
        return UserManager.instance;
    }
    
    getPopulation(){
        return this.roomDTO.roomNumber.size;
    }

    roomEnter(user1, user2, roomNumber){
        this.roomDTO.enter(user1, user2, roomNumber);
    }
    
    roomExit(user1, user2, roomNumber){
        this.roomDTO.delete(user1, user2, roomNumber);
    }

    newRoomNumber(){
        return this.roomDTO.nextRoomNumber();
    }

    roomNumberForExit(room){
        this.deque.shift(room);
    }

    roomInformationByUser(user){
        console.log("user : "+this.roomDTO.searchByUser(user));
        return this.roomDTO.searchByUser(user);
    }
    roomInformationByRoom(room){
        console.log("room : "+this.roomDTO.searchByRoom(room));
        return this.roomDTO.searchByRoom(room);
    }
    // enqueue(item) {
    //     this.room.push()
    // this.room.push(item);
    // }
    
    // dequeue() {
    //     let entry = 0;
    //     this.room.forEach((item, index) => {
    //         if (this.room[entry].score < this.room[index].score) {
    //         entry = index;
    //         }
    //     });
    //     return this.room.splice(entry, 1);
    // }
}

module.exports = UserManager;



