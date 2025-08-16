function finalName(name) {
  console.log("name is : ", name);
}
finalName("nikunj"); // function hosting : by default compile time java script shift fuction to it's fuction call before at the top in block of code

// variable hosting : 
{
  // in java script by default : var age = 99;
  console.log("Age : ", age); // undefined because java script shift only variable declaration(not iclude inisialization) to top of block of code
  var age = 99;

}
{
  console.log("Let : ", Let); // in the case of let variable hosting is not possible 
  let Let = true;
}
{
  console.log("Const : ", Const); // in the case of const variable hosting is not possible 
  const Const = true;
}