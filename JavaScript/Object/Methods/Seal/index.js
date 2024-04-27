let obj = {
    sub1 : "HTML",
    sub2 : "CSS",
    sub3 : "JS"
}



console.log(obj);

// seal
Object.seal(obj);
obj.sub3="JavaScript";  // possible
obj.sub4= "REACT JS";   // Not Possible
delete obj.sub3;  // Not Possible 
console.log(obj);