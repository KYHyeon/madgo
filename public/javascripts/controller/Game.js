import Broker from './user/Broker.js'
import User from './user/User.js'
import Dealer from './Dealer.js'
export default class Game {   // In index, game.start => Generating
    _userA = new User;
    _userB = new User;
    _broker = new Broker;

    _dealer = new Dealer(this._broker, this._userA, this._userB);

    constructor() {
        console.log("Game 생성")
    }

    get userA() {
        return this._userA;
    }

    set userA(value) {
        this._userA = value;
    }

    get userB() {
        return this._userB;
    }

    set userB(value) {
        this._userB = value;
    }

    get broker() {
        return this._broker;
    }

    set broker(value) {
        this._broker = value;
    }

    get dealer() {
        return this._dealer;
    }

    set dealer(value) {
        this._dealer = value;
    }

}