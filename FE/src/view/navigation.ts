let bodyShowAndHide = document.getElementById("body")?.style.display;
let LRarrow = document.getElementById("head");
let RLarrow = document.getElementById("body");
LRarrow?.addEventListener('click', (event)=>{
    RLarrow?.style.display = "flex";
    LRarrow?.style.display = "none";
    RLarrow?.animate({
        "width":["0%","100%"]
    }, 500);
})
RLarrow?.addEventListener('click', (event)=>{
    LRarrow?.style.display = "flex";
    RLarrow?.style.display = "none";


})



function showAndHide(state : string){
    console.log(state);
    return (state==="flex"?["none", "flex"]:["flex", "none"]);
}
