import Labels from "./Labels.js";
import Label from "./Label.js"

export default class Card {
    _special = false;
    _month: number;
    _order: number;
    label: Label;
    isFaceUp: boolean;

    constructor(month: number, order: number) {
        this._month = month;
        this._order = order;
        this._special = false;
        this.label= Labels.make_label(Number(month.toString() + order.toString()));
        this.isFaceUp = true;
    }

    static dummy = new Card(1,1)
}
