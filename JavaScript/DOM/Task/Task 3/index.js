let ip1 = Number(document.getElementById("ip1").value);
let ip2 = Number(document.getElementById("ip2").value);
let div1 = document.getElementById("div");


function add(){
    // alert(ip1+ip2);
    div1.innerText= ip1+ip2;
}

function sub(){
    // alert(ip1-ip2);
    div1.innerText= ip1-ip2;
}

function div(){
    // alert(ip1/ip2);
    div1.innerText= ip1/ip2;
}

function mul(){
    // alert(ip1*ip2);
    div1.innerText= ip1*ip2;
}

function mod(){
    // alert(ip1%ip2);
    div1.innerText= ip1%ip2;
}
