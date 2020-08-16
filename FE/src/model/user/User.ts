import Player from './Player.js'
import Card from '../Card.js';

export default class User extends Player {
    NUM_INIT_HAND = 10
    NUM_INIT_FOOT = 0

    id: string

    constructor(id: string) {
        super();
        this.hand = new Array<Card>(this.NUM_INIT_HAND);
        this.foot = new Array<Card>(this.NUM_INIT_FOOT);
        // var
        this.id = id
    }
}