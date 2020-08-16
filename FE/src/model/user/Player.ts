import Card from "../Card.js";

export default class Player {
    get hand() {
        return this._hand;
    }

    set hand(value) {
        this._hand = value;
    }

    get foot() {
        return this._foot;
    }

    set foot(value) {
        this._foot = value;
    }

    _hand: Card[]
    _foot: Card[]
}