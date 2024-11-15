let p1 = document.querySelector(".desc-1");
let p2 = document.querySelector(".desc-2");
let p3 = document.querySelector(".desc-3");

let click1 = document.querySelector(".first-container");
let click2 = document.querySelector(".second-container");
let click3 = document.querySelector(".third-container");

click1.addEventListener('click',function(){
    p1.classList.toggle("mystyle");
    let temp = document.querySelector(".first");
    temp.classList.toggle("replaced")
})

click2.addEventListener('click',function(){
    p2.classList.toggle("mystyle");
    let temp = document.querySelector(".middle");
    temp.classList.toggle("replaced");
    
})
click3.addEventListener('click', function(){
    p3.classList.toggle("mystyle");
    let temp = document.querySelector(".last");
    temp.classList.toggle("replaced");
})