let str = "Nikunj Gohel";

console.log("Upper Case : ", str.toUpperCase());

console.log("lower Case : ", str.toLowerCase());

// trim function remover extra space form sentence from start and end

let tstr = "                nikunj  gohel        s";

console.log("Trim : ", tstr.trim());

console.log("index : ", str.indexOf("N")); //find index of char
console.log("last index : ", str.lastIndexOf("n")); //find index of last char

console.log("char at : ", str.charAt(3)); //find char to help of index

console.log("slice : ", str.slice(3)); //create entered index to end of string
console.log("slice to : ", str.slice(3, 7)); //create entered index start and end string

// split

let sstr = "Hello I am Nikunj Gohel S";
console.log("simple sstr: ", sstr);

let arr = sstr.split(" "); //Help in str sentence convert to element of arr ,base:"," OR " "etc..
console.log("arr split : ", arr);
