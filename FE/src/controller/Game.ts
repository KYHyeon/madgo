import Broker from './user/Broker.js'
import User from './user/User.js'
import Dealer from './Dealer.js'
import Labels from '../model/Labels.js'

export default class Game {   // In index, game.start => Generating
    _userA: User;
    _userB: User;
    _broker: Broker;

    _dealer: Dealer;

    constructor() {
        this.init()
    }

    init() {
        console.log("Game 생성")
        const canvas = document.getElementById('canvas');
        paper.setup(canvas)

        $.when(Labels.getLabelJson()).done(() => {   // lazy init
            this.userA = new User('A');
            this.userB = new User('B');
            this.broker = new Broker;

            this.dealer = new Dealer(this._broker, this._userA, this._userB);

            this.render()
        })
    }

    render() {
        console.log('A render', this.userA)
        this.userA.render()
        console.log('B render', this.userB)
        this.userB.render()
        this.broker.render()
        this.dealer.render()
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
