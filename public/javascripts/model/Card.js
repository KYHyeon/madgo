import Labels from "./Labels.js";

export default class Card {
    _special = false;

    constructor(month, number) {
        this._month = month;
        this._number = number;
        this._special = false;
        this.label = Labels.make_label("" + month + number);
    }
}
