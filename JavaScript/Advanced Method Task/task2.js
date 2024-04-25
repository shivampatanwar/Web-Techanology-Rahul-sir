
let arr = [20000, 30000, 15000, 72000, 70000];
console.log(arr);

let price = arr.filter((x)=>{
    return x>10000;
})
console.log(price);
let gst = price.map((y)=>{
    return y+y*0.03;
})
console.log(gst);
let total = gst.reduce((acc, val)=>{
    return acc+val;
}, 0)

console.log(total);
console.log("After 10% discount");
console.log(total-total*0.10);


