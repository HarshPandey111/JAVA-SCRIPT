const obj={
   name:"pandey",
   age:"20",
   hometown :"sultanpur",
   interest :"watching IPL"
}
// console.log( obj.name);
// console.log( obj["age"]);

//symbol baad me padhenge 

// Object.freeze(obj);
// obj["name"]="ww";// doest give error
console.log(obj);

obj.greeting=function(){
   console.log("hello");
   
}
obj.greeting();

// obj.greeting1=function(){
//     console.log(`we`,$(this.age));
    
// }
// console.log(obj.greeting1());
