let c=0;
console.log(typeof c);
const decrease=document.getElementById("d");
const increse=document.getElementById("i");
const reset=document.getElementById("r");

decrease.onclick=function(){
    c--;
    document.getElementById("zero").textContent=c;
}
reset.onclick=function(){
    c=0;
    document.getElementById("zero").textContent=c;

}
increse.onclick=function(){   
    c++;
    document.getElementById("zero").textContent=c;

}