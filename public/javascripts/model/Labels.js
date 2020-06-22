import Label from "./label.js"

export default class Labels {
    static data = {};
    static init = false;

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
    static getLabelJson() {
        const $this = this;
        return $.ajax({
            url: '/label.json',
            dataType: "json",
            method: "GET"
        }).done(function (json) {
            // console.log(json["label"])
            for (const value of json["label"]) {
                $this.data[value.id] = value.information;
                // console.log(value.id,$this.data[value.id])
            }

            $this.init = true;

        }).fail(function (data) {
            console.log("fail");
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

    static make_label(id) {
        // console.log(id)
        if (this.init) {
            // console.log(this.data[id])
            return new Label(this.data[id])
        }
        console.error("Labels.js must already be initialized before use!")
    }
}
