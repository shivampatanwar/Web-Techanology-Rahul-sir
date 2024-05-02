let div = document.createElement("div");
let h1 = document.createElement("h1");
let span = document.createElement("span");
let div1 = document.createElement("div");
let h2 = document.createElement("h2");

h1.innerText="Hello";
h2.innerText="Hello World";


document.body.appendChild(div);

div.appendChild(h1);
div.appendChild(span);
div.appendChild(div1);
div1.appendChild(h2);