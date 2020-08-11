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
            this.handPosition = [canvas.width / 3 * 2, 30]
        } else {
            this.handPosition = [canvas.width / 3 * 2, canvas.height - 150]
        }
    }

    renderHand(ctx) {
        const paddingTop = 30
        const marginCard = 10
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 5; j++) {
                new Card(1, 1).render(
                    ctx,
                    this.handPosition[0] + 60 * j,
                    this.handPosition[1] + 60 * i
                )
            }
        }
    }

    renderFoot(ctx) {

    }

    render(ctx) {
        this.renderHand(ctx)
        this.renderFoot(ctx)
    }
}