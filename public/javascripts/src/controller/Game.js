import Broker from './user/Broker.js'
import User from './user/User.js'
import Dealer from './Dealer'

class Game {   // In index, game.start => Generating

    constructor(){
        this.userA = new User;
        this.userB = new User;
        this.broker = new Broker;

        this.dealer = new Dealer(this.broker, this.userA, this.userB);
    
    }



}

module.exports = Game;