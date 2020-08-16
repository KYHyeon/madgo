import Game from "../model/Game.js";
import CardView from "./CardView.js";
import View from "./view.js"

export default class MadgoView implements View {
    constructor() {
        const canvas = document.getElementById('canvas');
        paper.setup(canvas)
    }
    
    render() {
        this.renderPlayers()
    }

    renderPlayers() {
        this.renderHandA()
        this.renderHandB()
        this.renderFoot()
        this.renderProfile()
        this.renderScore()
        this.renderDeck()
    }

    renderHandA() {
        const width = 41
        const height = 61
        const x = 1630
        const y = 20
        const marginRight = 16
        const marginBottom = 11
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 5; j++) {
                new CardView(
                    x + (width + marginRight) * j,
                    y + (height + marginBottom) * i,
                    width,
                    height
                ).render()
            }
        }
    }

    renderHandB() {
        const width = 170
        const height = 255
        const x = 17
        const y = 809
        const marginRight = 20
        for (let i = 0; i < 10; i++) {
            new CardView(x + (width + marginRight) * i, y, width, height).render()
        }
    }


    // renderHand() {
    //     if (this.id === 'A') {
    //         this.renderHandA()
    //     } else {
    //         this.renderHandB()
    //     }

    // }

    renderFoot() {
        const width = 74
        const height = 111
        const x = 17
        const marginRight = 20
        const ys = [20, 678]
        ys.forEach((y: number) => {
            for (let i = 0; i < 17; i++) {
                new CardView(x + (width + marginRight) * i, y, width, height).render()
            }
        })
    }

    renderProfile() {
        const width = 271
        const height = 133
        const x = 1630
        const ys = [171, 656]
        ys.forEach((y) => {
            console.log(x, y)
            new CardView(x, y, width, height).render()
        })


    }

    renderScore() {
        const width = 271
        const height = 133
        const x = 1630
        const ys = [332.7, 494.3]
        ys.forEach((y) => {
            new CardView(x, y, width, height).render()
        })
    }

    renderDeck() {
        const width = 70
        const height = 111

        const points = [
            [466, 182], [676, 182], [886, 182], [1096, 182],
            [361, 347], [571, 347], [991, 347], [1201, 347],
            [466, 512], [676, 512], [886, 512], [1096, 512]
        ]
        points.forEach((point) => {
            new CardView(point[0], point[1], width, height).render()
        })

        // this.deck[0].render(781, 347, 70, 111)
    }
}