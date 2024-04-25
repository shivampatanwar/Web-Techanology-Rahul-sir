
function reels(x, y){

    if(y&&x){
        console.log("Success");
    }
    else{
        console.log("Login Required");
    }
    
}

reels(auth(),home());

function auth(){
    return true;

}

function home(){
    return false;

}