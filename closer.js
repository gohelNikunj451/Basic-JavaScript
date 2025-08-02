function init() {
  let name = "nikunj"; // binding variable with nested function after closeing function 
  function print() {
    console.log("name : ", name);
  }
  return print;
}
let response = init();
response();