import Labels from "./Labels.js";
import Label from "./Label"

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

    render(x: number, y: number, w = 50, h = 50) {
        const path = new paper.Path.Rectangle(x, y, w, h);
        path.fillColor = '#cb3c3c'
        path.onMouseDown = function(event: any) {
            console.log(this)
        }

        if (this.isFaceUp) {
            // 카드의 앞면이 보이게 그린다.
            const text = new paper.PointText(new paper.Point(x + w / 2 - 5, y + h / 2));
            text.fillColor = 'black';

            // Set the content of the text item:
            text.content = this.label.id;
        }
    }
}
