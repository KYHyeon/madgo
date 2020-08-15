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
        var rectangle = new paper.Rectangle(x, y, w, h);
        var path = new paper.Path.Rectangle(rectangle);
        path.fillColor = '#cb3c3c'

        if (this.isFaceUp) {
            // TODO: 카드의 앞면이 보이게 그린다.
        }
    }
}
