


function autocal(){

    let autoval  = document.querySelector('#autoval').value;
    let autoh1  = document.querySelector('#autoh1');
    let result = autoval*10;

    autoh1.innerHTML= result + " RS/-";

    
}

function autobook(){

    let autoval  = document.querySelector('#autoval').value;
    let result = autoval*10;

    if(result>0){
        alert("Auto Booked Successfully");
    }

}


function bikecal(){

    let bikeval  = document.querySelector('#bikeval').value;
    let bikeh1  = document.querySelector('#bikeh1');
    let result1 = bikeval*6;

    bikeh1.innerHTML= result1 + " RS/-";
    

    
}


function bikebook(){

    let bikeval  = document.querySelector('#bikeval').value;
    let result1 = bikeval*6;


    if(result1>0){
        alert("Bike Booked Successfully");
    }

}




function carcal(){

    let carval  = document.querySelector('#carval').value;
    let carh1  = document.querySelector('#carh1');
    let result2 = carval*20;

    carh1.innerHTML= result2 + " RS/-";

    
}


function carbook(){

    let carval  = document.querySelector('#carval').value;
    let result2 = carval*20;

    
    if(result2>0){
        alert("Car Booked Successfully");
    }


}