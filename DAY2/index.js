console.log("hello");
let heading="MAth Classe";
let para="HOW MANY KNOW BASIC ABOUT MATH CLASSES";
document.getElementById("myh1").textContent=heading;
document.getElementById("myp1").textContent=para;
// for(let i=0;i<10000000;i++){
// document.getElementById("p2").textContent=i;
// }
// window.alert("bkl");
// let i = 0;
// let p2 = document.getElementById("p2");
// let interval = setInterval(function() {
//     p2.textContent = i;
//     i++;
//     if (i >= 10000) {
//         clearInterval(interval);
//     }
// }, 0);

/// taking input from user
document.getElementById("p3").textContent="Your name";
let username=window.prompt("Enter Your User Name");
document.getElementById("p2").textContent=username;