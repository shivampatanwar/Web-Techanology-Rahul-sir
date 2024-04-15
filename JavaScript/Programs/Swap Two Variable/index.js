//with temp

// let a = 10;
// let b = 30;

// let temp = a;

// console.log("Before Swap");
// console.log("a is", a);
// console.log("b is", b);
// console.log();

// a= b;  b=temp;
// console.log("After Swap");
// console.log("a is", a);
// console.log("b is", b);




//without temp
let a = 10;
let b = 30;

console.log("Before Swap");
console.log("a is", a);
console.log("b is", b);
console.log();

a= a+b;  b=a-b;  a=a-b;
console.log("After Swap");
console.log("a is", a);
console.log("b is", b);