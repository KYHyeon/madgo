import Card from '../model/Card.js'

export default class Deck {
    _deck = new Array(55);

    constructor() {
        for (let i = 0; i < 13; i++) {
            for (let j = 0; j < 4; j++) {
                this.deck[i * 4 + j] = new Card(i + 1, j + 1);
            }
        }
        for (let i = 0; i < 3; i++) {
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