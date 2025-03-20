console.log("Welcome TO LUCKNOW");
let a=document.getElementById("myh1").textContent="WELCOME TO HERE";
a=a.toLowerCase();
// document.getElementById("myh1").textContent=a;
let username;
document.getElementById("b1").onclick=function(){
    username=document.getElementById("in1").value;
    username=username.toUpperCase();
    console.log(username);
    document.getElementById("myh1").textContent=username
    
}    