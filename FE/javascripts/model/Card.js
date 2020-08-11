import Labels from "./Labels.js";

export default class Card {
    _special = false;

    constructor(month, number) {
        this._month = month;
        this._number = number;
        this._special = false;
        this.label = Labels.make_label("" + month + number);
        this.isFaceUp = true;
    }

    render(x, y, w = 50, h = 50) {
        console.log(canvas.width)
        var rectangle = new paper.Rectangle(x, y, w, h);
        var path = new paper.Path.Rectangle(rectangle);
        console.log(rectangle)
        path.fillColor = '#E13229';

        if (this.isFaceUp) {
            // ctx.strokeText("" + this._month + this._number, x + w / 2, y + h / 2)
        }
    }
}
