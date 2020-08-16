import Player from './Player.js'
import Card from '../../model/Card.js';

export default class Broker extends Player {
    NUM_INIT_HAND: number = 10
    NUM_INIT_FOOT: number = 0

    constructor() {
        super();
        this.hand = new Array<Card>(this.NUM_INIT_HAND);
        this.foot = new Array<Card>(this.NUM_INIT_FOOT);
    }

    render() {}
}