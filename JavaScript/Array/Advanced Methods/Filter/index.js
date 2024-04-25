let arr= [14, 562, 789, 46, 1234, 456, 7854, 789, 564, 1234, 78596, 48];


let filter = arr.filter((x)=> {
    // return x;
    // return x>10;
    // return x<10;
    if(x>=10 && x<=100){
        return x;
    }
})

console.log(filter);