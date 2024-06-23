let arr=[1,2,3,4,5,6,7,8,9];
let brr=[];

// function even(ele){
//     if(ele%2==0) return ele;
// }
// brr=arr.filter(even)


// brr=arr.filter(function(ele){
//     if(ele%2==0) return ele;
// })


// brr=arr.filter((ele)=>{
//     if(ele%2==0) return ele;
// })


brr=arr.filter(ele => (ele%2==0))

console.log("arr : ",arr);
console.log("brr : ",brr);