//a function that taks function in arguments is known is high order function
// CALL BACK FUN 


function add(a,b,callback){
    let res=a+b

    callback(res)

}

add(3,5569,function (res){
    console.log(res)
}); 




function mul(a,b,callback){
    let res=a*b

    callback(res)

}

mul(3,2, (res)=>{
    console.log(res)
}); 



function Divide(a,b,callback){
    let res=a/b

    callback(res)
    return ()=>console.log(res);

}

const res= Divide(3,22, ()=>{}); 
console.log(res());
// res();







