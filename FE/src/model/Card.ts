import Labels from "./Labels.js";
import Label from "./Label"

export default class Card {
    _special = false;
    _month: number;
    _order: number;
    label: Label;
    isFaceUp: boolean;
    path: paper.Path.Rectangle;
    text: paper.PointText;

    constructor(month: number, order: number) {
        this._month = month;
        this._order = order;
        this._special = false;
        this.label = Labels.make_label(Number(month.toString() + order.toString()));
        this.isFaceUp = true;
    }

    // TODO: w, h default 매개변수 제거
    render(x: number, y: number, w = 50, h = 50) {
        this.path = new paper.Path.Rectangle(x, y, w, h);
        this.path.fillColor = Card.PRIMARY_COLOR
        this.path.onMouseDown = (event) => {
            // TODO: 테스트용 위치
            this.move(Card.TEST_MOVE_TO)
        }

        if (this.isFaceUp) {
            // 카드의 앞면이 보이게 그린다.
            this.text = new paper.PointText(Card.calcTextPosition(x, y, w, h));
            this.text.fillColor = 'black';

            // Set the content of the text item:
            this.text.content = this.label.id;
        }
    }

    move(point: paper.Point) {
        console.log(this)
        this.path.tween({
            position: point
        }, {
            easing: 'easeInOutCubic',
            duration: Card.MOVE_TWEEN_DURATION
        })
    }

    static get TEST_MOVE_TO() {
        return new paper.Point(50, 50)
    }

    static get PRIMARY_COLOR() {
        return '#cb3c3c'
    }

    static get MOVE_TWEEN_DURATION() {
        return 50
    }

    static calcTextPosition(x: number, y: number, w: number, h: number) {
        return new paper.Point(x + w / 2 - 5, y + h / 2)
    }
}
