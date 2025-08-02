const arr = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  },
  function (a, b) {
    return a * b;
  },
  function (a, b) {
    return a / b;
  }
];
console.log("sum of 1 + 2 : ", arr[0](1, 2));
console.log("sum of 1 + 2 : ", arr[1](1, 2));
console.log("sum of 1 + 2 : ", arr[2](1, 2));

let obj = {
  name: "nikunj",
  age: 90,
  greet: () => {
    return ("Thank you all of you ");
  }
}
console.log(obj.greet());

//default parameters
function showName(name = "nikunj", Uname = name.toUpperCase()) {
  console.log("your name is : ", name);
  console.log("your last name is : ", Uname);
}
showName("Rahul");
showName(null, null); // null is null
showName(undefined);// but undefined can use default paramenters

function getName() {
  return ("hulalalal");
}
function ShowSecName(name = getName()) { // function pass as default parameters
  console.log("your second name is : ", name);
}
ShowSecName();