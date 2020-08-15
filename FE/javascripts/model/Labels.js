import Label from "./Label.js"

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
                $this.data[value.id].id = value.id
                // console.log(value.id,$this.data[value.id])
            }

            $this.init = true;

        }).fail(function (data) {
            console.log("fail");
        })
        
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
