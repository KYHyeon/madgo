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

    constructor(hand, foot) {
        this._hand = hand;
        this._foot = foot;
    }
}