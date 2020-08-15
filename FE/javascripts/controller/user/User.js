import Player from './Player.js'
import Card from '../../model/Card.js';

export default class User extends Player {
    NUM_INIT_HAND = 10
    NUM_INIT_FOOT = 0

    id

    constructor(id) {
        super();
        this.hand = new Array(this.NUM_INIT_HAND);
        this.foot = this.NUM_INIT_FOOT;
        // var
        this.id = id
    }

    renderHandA() {
        const width = 41
        const height = 61
        const x = 1630
        const y = 20
        const marginRight = 16
        const marginBottom = 11
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 5; j++) {
                new Card(1, 1).render(x + (width + marginRight) * j, y + (height + marginBottom) * i, width, height)
            }
        }
    }

    renderHandB() {
        const width = 170
        const height = 255
        const x = 17
        const y = 809
        const marginRight = 20
        for (var i = 0; i < 10; i++) {
            new Card(1, 1).render(x + (width + marginRight) * i, y, width, height)
        }
    }


    renderHand() {
        if (this.id == 'A') {
            this.renderHandA()
        } else {
            this.renderHandB()
        }

    }

    renderFoot() {
        const width = 74
        const height = 111
        const x = 17
        const y = this.id == 'A' ? 20 : 678
        const marginRight = 20

        for (var i = 0; i < 17; i++) {
            new Card(1, 1).render(x + (width + marginRight) * i, y, width, height)
        }
    }

    renderProfile() {
        const width = 271
        const height = 133
        const x = 1630
        const y = this.id == 'A' ? 171 : 656

        console.log(x, y)

        new Card(1, 1).render(x, y, width, height)
    }

    renderScore() {
        const width = 271
        const height = 133
        const x = 1630
        let y = 0
        if (this.id == 'A') {
            y = 332.7
        } else {
            y = 494.3
        }

        new Card(1, 1).render(x, y, width, height)
    }

    render() {
        console.log(self.id)
        this.renderHand()
        this.renderFoot()
        this.renderProfile()
        this.renderScore()
    }
}