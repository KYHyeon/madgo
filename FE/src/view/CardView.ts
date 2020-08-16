import Card from "../model/Card.js";
import View from "./View.js";

export default class CardView implements View {
    card = Card.dummy
    x: number
    y: number
    w: number
    h: number

    constructor(x:number, y: number, w: number, h: number) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    render() {
        const path = new paper.Path.Rectangle(this.x, this.y, this.w, this.h);
        path.fillColor = '#cb3c3c'
        path.onMouseDown = function(event: any) {
            console.log(this)
        }

        if (this.card.isFaceUp) {
            // 카드의 앞면이 보이게 그린다.
            const text = new paper.PointText(new paper.Point(this.x + this.w / 2 - 5, this.y + this.h / 2));
            text.fillColor = 'black';

            // Set the content of the text item:
            // text.content = this.card.label.id;
        }
    }
}