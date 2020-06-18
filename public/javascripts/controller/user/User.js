import Player from './Player.js'

export default class User extends Player {
    NUM_INIT_HAND = 10
    NUM_INIT_FOOT = 0

    constructor() {
        super();
        this.hand = new Array(this.NUM_INIT_HAND);
        this.foot = this.NUM_INIT_FOOT;
        // var
    }
}