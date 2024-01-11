var users=[];
users=JSON.parse(localStorage.getItem("users"));


var loginEmail=document.getElementById("emailUsername");
var loginPassword=document.getElementById("passwordUser");


function checkEmail(){
    for(var i=0;i<users.length;i++){
        if(users[i].email==loginEmail.value){
            return true;
        }
        
    }
    return false;
}


function checkPassword(){
    for (var i=0;i<users.length;i++){
        if(users[i].password==loginPassword.value){
            return true;
        }
        
    }
    return false;
}


function checkUser(){
if(checkEmail()==true  &&  checkPassword()==true ){
    location.assign("./index.html")
}
else{
    alert("please sign up first")
}
}


