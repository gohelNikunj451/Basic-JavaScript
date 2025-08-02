// there are two types of error
// 1.compile time error
// 2.run time error

// 1.compile time error:
// console.log(1;

//2. run time error
// console.log(x);
//undefied reference error in run time

try {
  console.log("i am in try block");
  console.log(x);
  console.log("i am out try block");
}
catch (err) {
  throw Error("first declare then console"); // cutom error
  console.log(err);
  console.log("i am catch now");
}
finally {
  console.log("i will run everytime i am finally complete");
}