// import Labels from "./Labels.js"
export default class Label {
    constructor(data) {
        // console.log(data)
        this.id = data.id;
        this.month = data.month;
        this.scores = data.scores;
        this.light = data.light;
        this.rgb = data.rgb;
        this.band = data.band;
        this.cater = data.cater;
        this.animal = data.animal;
    }
}
// const labels = new Labels();
// console.log(labels.data);
