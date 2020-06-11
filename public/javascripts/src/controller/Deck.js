import Card from '../model/Card.js'

class Deck{
    constructor(){
        this.deck = new Array(55);
        for(var i=0; i<13; i++){
            for(var j=0; j<4; j++){
                this.deck[i*4+j] = new Card(i+1, j+1);
            }
        }        
        for(var i=0; i<3; i++){
            this.deck.push(new Card())
        }
    }

    shuffle(){

    }

    pop(){

    }
}

module.exports = Deck;