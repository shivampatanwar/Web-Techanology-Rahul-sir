// let arr= [14, 562, 789, 46, 1234, 456, 7854, 789, 564, 1234, 78596, 48];
let arr= [1, 2, 3, 4, 5, 6, 7];


let reduce = arr.reduce((acc, val)=> {
    return acc+val;
}, 0);


console.log(reduce);