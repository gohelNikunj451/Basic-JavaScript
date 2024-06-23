let arr=[1,3,5,56,334,243,44];
console.log("forOf loop")
// forOf loop is never change or not affect to orignal arr
// it creates a new duplicate arr 
for (const ele of arr) {
    console.log(ele);
    
}

console.log("forEach loop ")
// forEach loop is also never change of not affect to orignal arr 
// it can print index of arr 
arr.forEach((ele,i) => {
    console.log(ele,i);
    
});