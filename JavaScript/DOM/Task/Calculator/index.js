let ip = document.querySelector('input');

function equal() {
    let ipvalue = ip.value;
    ip.value = eval(ipvalue);
}

function ac() {
    ip.value = '';
}

function number(a) {
    let ipvalue = ip.value;
    ip.value =  ipvalue+a;
}

