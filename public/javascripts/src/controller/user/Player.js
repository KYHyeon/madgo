class Player{
    constructor(hand, foot) {
        this.hand = hand;
        this.foot = foot;
    }

    getHand() {
        return this.hand;
    }

    setHand(hand) {
        this.hand = hand;
    }

    getFoot() {
        return this.foot;
    }

    setFoot(foot) {
        this.foot = foot;
    }
}

module.exports = Player;