import Broker from './user/Broker.js'
import User from './user/User.js'
import Dealer from './Dealer.js'
import Labels from '../model/Labels.js'

export default class Game {   // In index, game.start => Generating
    _userA;
    _userB;
    _broker;

    _dealer;

    ctx = document.getElementById("canvas").getContext("2d");

    constructor() {
        console.log("Game 생성")
        this.init()
    }

    init() {
        $.when(Labels.getLabelJson()).done(()=> {   //lazy init
            this.userA = new User('A');
            this.userB = new User('B');
            this.broker = new Broker;

            this.dealer = new Dealer(this._broker, this._userA, this._userB);

            this.render()
        })
    }

    render() {
        this.ctx.beginPath();
        this.ctx.rect(0, 0, canvas.width, canvas.height);
        this.ctx.stroke()

        this.userA.render(this.ctx)
        this.userB.render(this.ctx)
        this.broker.render(this.ctx)
        this.dealer.render(this.ctx)
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
