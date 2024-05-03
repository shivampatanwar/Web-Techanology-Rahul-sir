let ip = document.querySelector('input');

const audio = new Audio("https://www.myinstants.com/en/instant/vine-boom-sound-70972/?utm_source=copy&utm_medium=share");



function equal() {
    let ipvalue = ip.value;
    ip.value = eval(ipvalue);
    audio.play();
}

function ac() {
    ip.value = '';
    audio.play();
}

function number(a) {
    let ipvalue = ip.value;
    ip.value =  ipvalue+a;

    audio.play();
}


ip.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      equal();
    }
  });

