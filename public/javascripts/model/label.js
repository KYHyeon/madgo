class label {
    //     {
    //       "id": 11,
    //       "information": [
    //         {
    //           "month": 1,
    //           "scores": 0,
    //           "light": true,
    //           "rgb": [
    //             {
    //               "red": false,
    //               "green": false,
    //               "blue": false
    //             }
    //           ],
    //           "band": false,
    //           "cater": false,
    //           "animal": false
    //         }
    //       ]
    //     }

    constructor(id, month, scores, light, rgb, band, cater, animal) {
        this.id = id;
        this.month = month;
        this.scores = scores;
        this.light = light;
        this.rgb = rgb;
        this.band = band;
        this.cater = cater;
        this.animal = animal;
    }
}