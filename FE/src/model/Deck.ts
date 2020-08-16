import Card from './Card.js'

export default class Deck {
    NUM_INIT_DECK = 55;
    NUM_SPECIAL_CARD = 3;
    _deck = new Array(this.NUM_INIT_DECK);

    constructor() {
        let cnt = 0;
        for (let month = 1; month <= 12; month++) {
            for (let order = 1; order <= 4; order++) {
                // console.log(month + " " + number)
                this.deck[cnt++] = new Card(month, order);
            }
        }
        // TODO Special card 처리
        // for (let i = 0; i < this.NUM_SPECIAL_CARD; i++) {
        //     this.deck.push(new Card())
        // }
    }

    /**
     * Use the modern version of the Fisher–Yates shuffle algorithm
     */
    shuffle() {
        for (let i = this._deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this._deck[i], this._deck[j]] = [this._deck[j], this._deck[i]];
        }
    }

    /**
     * Pop first card and return in deck Array
     * param n: shift n cards
     */
    shift(n: number) {
        const returnArr = []
        for (let i = 0; i < n; i++) {
            returnArr.push(this._deck.shift())
        }
        return returnArr;
    }

    get deck() {
        return this._deck;
    }

    set deck(value) {
        this._deck = value;
    }

}
