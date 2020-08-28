const RoomData = require('./RoomData');
//var Map = require("collections/map");
class UserManager{
    /*
        front : unshift ->  <- shift
        end : push ->  <- pop
    */
    roomData;
    constructor() { //: number
        if(!UserManager.instance){
            this.roomData = new RoomData();
            UserManager.instance = this;
        }
        return UserManager.instance;
    }
    
    getPopulation(){
        return this.roomData.roomNumber.size;
    }

    roomEnter(user1, user2, roomNumber){
        this.roomData.enter(user1, user2, roomNumber);
        console.log(this.roomData);
    }
    
    roomExit(user1, user2, roomNumber){
        this.roomData.delete(user1, user2, roomNumber);
    }

    getNewRoom(){
        return this.roomData.nextRoomNumber();
    }

    roomInformationByUser(user){
        console.log("user : "+this.roomData.searchByUser(user));
        return this.roomData.searchByUser(user);
    }
    roomInformationByRoom(room){
        console.log("room : "+this.roomData.searchByRoom(room));
        return this.roomData.searchByRoom(room);
    }
    showInformation(){
        this.roomData.information();
    }
}

module.exports = UserManager;



