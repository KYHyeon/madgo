import Labels from "./Labels.js";

export default class Card {
    _special = false;

    constructor(month, number) {
        this._month = month;
        this._number = number;
        this._special = false;
        this.label = Labels.make_label("" + month + number);
    }

    render(ctx, x, y, w, h) {
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.stroke();
        ctx.strokeText("" + this._month + this._number, x + w / 2, y + h / 2)
    }
}
