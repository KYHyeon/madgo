import Broker from './user/Broker.js'
import User from './user/User.js'
import Dealer from './Dealer.js'
import Labels from '../model/Labels.js'

export default class Game {   // In index, game.start => Generating
    _userA;
    _userB;
    _broker;

    _dealer;

    constructor() {
        this.init()
    }

    init() {
        console.log("Game 생성")
        const canvas = document.getElementById('canvas');
        paper.setup(canvas)

        $.when(Labels.getLabelJson()).done(() => {   //lazy init
            this.userA = new User('A');
            this.userB = new User('B');
            this.broker = new Broker;

            this.dealer = new Dealer(this._broker, this._userA, this._userB);

            this.render()
        })
    }

    render() {
        var rectangle = new paper.Rectangle(0, 0, canvas.width, canvas.height);
        var path = new paper.Path.Rectangle(rectangle);
        path.fillColor = '#2F6118';
        // path.selected = true;

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
