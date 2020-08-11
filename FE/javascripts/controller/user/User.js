import Player from './Player.js'
import Card from '../../model/Card.js';

export default class User extends Player {
    NUM_INIT_HAND = 10
    NUM_INIT_FOOT = 0

    handPosition;
    footPosition;

    constructor(id) {
        super();
        this.hand = new Array(this.NUM_INIT_HAND);
        this.foot = this.NUM_INIT_FOOT;
        // var

        if (id == 'A') {
            // TODO canvas.width 가 왜 실제의 2배 사이즈 인지?
            this.handPosition = [canvas.width / 3, 30]
        } else {
            this.handPosition = [canvas.width / 3, 450]
        }
    }

    renderHand() {
        const paddingTop = 30
        const marginCard = 10
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 5; j++) {
                new Card(1, 1).render(
                    this.handPosition[0] + 60 * j,
                    this.handPosition[1] + 60 * i
                )
            }
        }
    }

    renderFoot() {

    }

    render() {
        this.renderHand()
        this.renderFoot()
    }
}