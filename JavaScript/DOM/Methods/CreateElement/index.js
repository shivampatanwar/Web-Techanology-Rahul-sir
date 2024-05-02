
// parallel

let h1 = document.createElement("h1");
let h6 = document.createElement("h6");
let h5 = document.createElement("h5");
let div = document.createElement("div");
let p = document.createElement("p");
let span = document.createElement("span");
let pre = document.createElement("pre");




// document.body.appendChild(div);
// div.appendChild(h1);
// div.appendChild(h6);
// div.appendChild(p);
// div.appendChild(span);
// div.appendChild(pre);



// nested

document.body.appendChild(div);
div.appendChild(h1);
div.appendChild(p);
div.appendChild(span);
div.appendChild(pre);
span.appendChild(h6);
pre.appendChild(h6);

