import {Suit} from "./Suit.js";
import {Denomination} from "./Denomination.js";

export default class Card {
    get suit() {
        return this._suit;
    }

    set suit(value) {
        this._suit = value;
    }

    get denomination() {
        return this._denomination;
    }

    set denomination(value) {
        this._denomination = value;
    }

    _special = false;

    constructor(suit, denomination) {
        if (!Suit.hasOwnProperty(suit) && !Denomination.hasOwnProperty(denomination))
            throw new TypeError(suit + denomination)

        this._suit = suit;
        this._denomination = denomination;
        this._special = false;
    }
}