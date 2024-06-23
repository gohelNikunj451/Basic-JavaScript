// function h(){
//     console.log("hello");
// }

// function m(){
//     console.log("mello");
// }

// setTimeout(h,5*1000);
// setTimeout(m,2*1000);


// setTimeout(function(){
//     console.log("fun");
// },2*1000)


//1 to 10

// for(let i=1;i<=10;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*500)
// }

//10 to  1

for(let i=10;i>=1;i--){
    setTimeout(function(){
        console.log(11-i)
    },i*500);
}