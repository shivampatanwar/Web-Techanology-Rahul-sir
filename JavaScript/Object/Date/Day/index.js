
let x = new Date();

let day = x.getDay();

switch (day) {
    case 0:
        console.log("SUNDAY");
        break;
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;

    default:
        break;
}

