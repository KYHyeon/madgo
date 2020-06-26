export default class Labels {
    constructor() {
        this.data = this.getLabelJson();
    }

    // readJson() {
    //     // TODO 클라이언트단에서 파일입출력이 가능한가???
    //     // TODO 읽어서 data에 집어넣자

    //     // var fs = require('fs');
    //     // JSON.parse()
    // }

    // getLabelJson(){
    //     $.get("../public/label.json",{
    //         id : id,
    //         information: information
    //     }).done(function(data){
    //         console.log(data);
    //     }).fail(function(data){
    //         console.log("Fail to load Label");
    //     });
    // }
    getLabelJson() {
        $.ajax({
            url : '../../model/lable.json',
            dataType: "json",
            method: "GET"
        }).done(function(json){
            this.data = json;
            console.log(this.data);
            for(var key in this.data){
                console.log(key, this.data[key]);
            }
        }).fail(function(data){
            console.log("faile");
        })
        
    }
}