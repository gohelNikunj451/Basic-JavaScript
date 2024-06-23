let str="hello";

console.log(str);
console.log("length : ",str.length);

console.log("ForOf loop")
for(const char of str){
    console.log(char);
}

// str.forEach((char) => {
//     console.log(char);
// });
// forEach is not working for string