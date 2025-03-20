 const a=[1,2,3,4,5]
 const b=[6,7,8,9,10]
 console.log(a);
 console.log(b);
 
//  a.push(b)
//  console.log(a);
// console.log(a[5][4]);

w=a.concat(b); // this method written a new array
//  console.log(w);



 // spread array
//  const ar3=[...a,...b]
//  console.log(ar3);
 
const arr=[1,2,3,[1,2,[1,2]]]
res=arr.flat(3)
console.log(res);




console.log(Array.isArray("PAndey"))
console.log(Array.from("PAndey"))

console.log(Array.from({name:"PAndey"}))
let p=10
let q=100
console.log(Array.of(p,q))

