
/* 
    The method about distinct card 
    is card's id (in label.json)
*/

class Card {
    static total = 0;
    constructor(i, j){
        this.id = i*10 + j;
        total+=1;   // 현재 패의 총합.
        
        this.getLabelJson();
    }

    getLabelJson(){
        $.get("../public/label.json",{
            id : id,
            information: information
        }).done(function(data){
            console.log(data);
        }).fail(function(data){
            console.log("Fail to load Label");
        });
    }

    getMonth(){ return data.information.month;}
    getScores(){ return data.information.scores;}
    getLight(){ return data.information.light;}
    getRGB(){ return data.information.rgb;}
    getBand(){ return data.information.band;}
    getCater(){ return data.information.cater;}
    getAnimal(){ return data.information.animal;}

}



module.exports = Card;