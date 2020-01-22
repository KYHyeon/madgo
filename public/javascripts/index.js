function draw(){
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
    }
    console.log("load complete!")
}