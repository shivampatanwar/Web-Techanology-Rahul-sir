
let a = document.querySelector("h1");


// let b = document.querySelector(".h1");
// let c = document.querySelector("#h1");

// Or 


let b = document.getElementsByClassName("h2");
let c = document.getElementById("h3");



function changeColorByTag(){
    a.style.backgroundColor="black";
    a.style.color="white";

}

function changeColorByClass(){
    b.style.backgroundColor="black";
    b.style.color="white";

}

function changeColorById(){
    c.style.backgroundColor="black";
    c.style.color="white";

}