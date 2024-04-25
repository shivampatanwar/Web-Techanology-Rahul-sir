
let btn = document.querySelector("#sign");

function signup(){
    let username = document.querySelector("#user").value;
    let password = document.querySelector("#pass").value;

    window.localStorage.setItem("Username", username);
    window.localStorage.setItem("Password", password);

    alert("Account Seccessfully Created");

    window.location.assign("./login.html");
} 



function login(){
    let username1 = document.querySelector("#username1").value;
    let password1 = document.querySelector("#password1").value;

    let user1= window.localStorage.getItem("Username");
    let pass1= window.localStorage.getItem("Password");


    if(username1==user1 && password1==pass1){
        alert("Account Seccessfully Created");
        window.location.assign("./home.html");
    }
    else{
        alert("Invalid username or password");
    }



    
} 


