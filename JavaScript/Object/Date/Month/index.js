
let x = new Date();

let month = x.getMonth();
console.log(month);

switch (month) {
    case 0:
        console.log("JAN");
        break;
    case 1:
        console.log("FEB");
        break;
    case 2:
        console.log("MAR");
        break;
    case 3:
        console.log("APR");
        break;
    case 4:
        console.log("MAY");
        break;
    case 5:
        console.log("JUN");
        break;
    case 6:
        console.log("JUL");
        break;
    case 7:
        console.log("AUG");
        break;
    case 8:
        console.log("SEP");
        break;
    case 9:
        console.log("OCT");
        break;
    case 10:
        console.log("NOV");
        break;
    case 11:
        console.log("DEC");
        break;

    default:
        console.log("Wrong Input");
        break;
}

