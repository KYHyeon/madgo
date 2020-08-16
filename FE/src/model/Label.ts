// import Labels from "./Labels.js"
export default class Label {
    id: number;
    month: any;
    scores: any;
    light: any;
    rgb: any;
    band: any;
    cater: any;
    animal: any;
    constructor(data: { id: number; month: any; scores: any; light: any; rgb: any; band: any; cater: any; animal: any; }) {
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
