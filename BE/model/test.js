const UserManager = require('./UserManager');

var roomManager = new UserManager();

var user1 = "hky";
var user2 = "lys";
var newNumber = roomManager.newRoomNumber();
roomManager.roomEnter(user1, user2, newNumber);
console.log(roomManager.getPopulation());
console.log(roomManager.roomInformationByRoom(newNumber));
console.log(roomManager.roomInformationByUser(user2));