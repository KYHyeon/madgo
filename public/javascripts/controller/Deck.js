import Card from '../model/Card.js'
import {Denomination} from "../model/Denomination.js";
import {Suit} from "../model/Suit.js";

export default class Deck {
    NUM_INIT_DECK = 55;
    NUM_SPECIAL_CARD = 3;
    _deck = new Array(this.NUM_INIT_DECK);

    constructor() {
        let cnt = 0;
        for (let denomination of Object.keys(Denomination)) {
            for (let suit of Object.keys(Suit)) {
                //TODO 반복문을 다 돌고도 더 돌아서 에러 발생
                console.log(denomination + " " + suit)
                this.deck[cnt++] = new Card(suit, denomination);
            }
        }
        for (let i = 0; i < this.NUM_SPECIAL_CARD; i++) {
            this.deck.push(new Card())
        }
    }

    shuffle() {

    }

    pop() {

    }

    get deck() {
        return this._deck;
    }

    set deck(value) {
        this._deck = value;
    }
}