import Broker from 'Broker.js'
import User from 'User.js'
import Dealer from 'Dealer.js'

class Game {   // In index, game.start => Generating

    constructor(){
        this.userA = new User;
        this.userB = new User;
        this.broker = new Broker;

        this.dealer = new Dealer(this.broker, this.userA, this.userB);
    
    }



}