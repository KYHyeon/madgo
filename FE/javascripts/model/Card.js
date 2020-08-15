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
        var path = new paper.Path.Rectangle(x, y, w, h);
        path.fillColor = '#cb3c3c'
        path.onMouseDown = function(event) {
            console.log(this)
        }

        if (this.isFaceUp) {
            // 카드의 앞면이 보이게 그린다.
            var text = new paper.PointText(new paper.Point(x + w / 2 - 5, y + h / 2));
            text.fillColor = 'black';

            // Set the content of the text item:
            text.content = this.label.id;
        }
    }
}
