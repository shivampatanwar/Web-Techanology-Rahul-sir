
let arr = [1000, 500, 650, 300, 900, 250];
console.log(arr);
let price = arr.filter((x)=>{
    return x>350;
});
console.log(price);
let gst = price.map((y)=>{
    return y+y*0.13;
});
console.log(gst);
let total = gst.reduce((acc, val)=>{
    return acc+val;
}, 0);.0

console.log(total);
// console.log("After Delivery charges 200");
// console.log(total+200);

if(total<499){
    console.log(total+200);
}


