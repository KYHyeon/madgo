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
        // var httpRequest = new XMLHttpRequest();
        // httpRequest.overrideMimeType("application/json");
        // httpRequest.open('GET', '../../model/lable.json');
        // httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // httpRequest.send(null);

        // httpRequest.onreadystatechange = function a() {
        //     if (httpRequest.readyState === XMLHttpRequest.DONE) { //== 4
        //         console.log("request done");
        //     } else {
        //         console.log("request not ready");
        //     }

        //     if (httpRequest.status === 200) {
        //         console.log("no problem");
        //     } else {
        //         console.log("404, or 500");
        //     }
        // }
        // console.info(JSON.parse(httpRequest.responseText));
        // this.data = JSON.parse(httpRequest.responseText);
    }
}