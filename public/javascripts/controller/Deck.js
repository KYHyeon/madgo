import Card from '../model/Card.js'

export default class Deck {
    NUM_INIT_DECK = 55;
    NUM_SPECIAL_CARD = 3;
    _deck = new Array(this.NUM_INIT_DECK);

    constructor() {
        let cnt = 0;
        for (let month = 1; month <= 12; month++) {
            for (let number = 1; number <= 4; number++) {
                // console.log(month + " " + number)
                this.deck[cnt++] = new Card(month, number);
            }
        }
        //TODO Special card 처리
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
    shift(n) {
        let returnArr = []
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

    render(ctx) {
        var width = 70
        var height = 111

        var points = [
            [466, 182], [676, 182], [886, 182], [1096, 182],
            [361, 347], [571, 347], [991, 347], [1201, 347],
            [466, 512], [676, 512], [886, 512], [1096, 512]
        ].forEach((point) => {
            new Card(1, 1).render(ctx, point[0], point[1], width, height)
        })

        this.deck[0].render(ctx, 781, 347, 70, 111)
    }
}
