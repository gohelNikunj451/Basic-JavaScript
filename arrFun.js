let arr=[1,2,3,4,5,6];

// Add Element to last in arr
arr.push(7);
console.log("push : ",arr);

//remove Element to last in arr
arr.pop();
console.log("pop : ",arr);

//Add Element to start in arr
arr.unshift(0);
console.log("Unshift : ",arr);

// remove Element to start in arr
arr.shift();
console.log("shift : ",arr);

// sort in assending order or dissending order
let brr=arr.sort((a,b)=>a-b);
console.log("shorted : ",brr);

//absolute shorting
let mrr=[1,-5,3,6,-2];
let nrr=mrr.sort((a,b)=> Math.abs(a)-Math.abs(b));
console.log("abs shorted : ",nrr);