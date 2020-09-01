let bodyShowAndHide = document.getElementById("body")?.style.display;
let LRarrow = document.getElementById("nav_LR_arrow");
let RLarrow = document.getElementById("nav_RL_arrow");
let body = document.getElementById("body");
LRarrow?.addEventListener('click', (event)=>{
    body?.style.display = "flex";
    LRarrow?.style.display = "none";
    body?.animate({
        "width":["30%","100%"]
    }, 400);
})
RLarrow?.addEventListener('click', (event)=>{
    LRarrow?.style.display = "flex";
    body?.style.display = "none";
})
