
// Way 1

let obj = {
    userName: "shivampatanwar",
    passWord: 96574123,
    phone: () => {
        console.log("I am Function");
        console.log(this.userName);
        console.log(this.passWord);
    }

    // phone : function(){
    //     console.log("I am Function");
    //     console.log(this.userName);
    //     console.log(this.passWord);
    // }
}


obj.phone();



