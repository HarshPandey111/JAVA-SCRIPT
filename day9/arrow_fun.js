const sayhello =(a,b)=>{
    return a+b;
}
console.log( sayhello(33,33));
const mul=(a,b)=> a*b;

function addno(){
    console.log(arguments);
    
}
addno(1,2,3,4,5) 



const add=(...nums)=>{
    console.log(nums);
    
}
add(1,2,2,3,4,3,2,1)


// hoisting available in  normal fun 