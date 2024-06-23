let arr=[1,2,3,4,5,6];
let brr=[];

// function squar(ele){
//     return ele*ele;
// }

// brr=arr.map(squar);



// brr=arr.map(function(ele){
//     return ele*ele;
// })



// brr=arr.map((ele)=>{
//     return ele*ele;
// });

brr=arr.map(ele => ele*ele);

console.log("arr : ",arr);
console.log("brr : ",brr);