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
        /* Using Durstenfeld shuffle algorithm */
        a = new Array(3);
        a[2] = 2;
        for(var i=this.deck.length - 1; i>0; i--){
            var j = Math.floor(Math.random() * (i+1));
            var temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
        console.log(a);
    }
    pop(){

    }
}

exports = Deck;