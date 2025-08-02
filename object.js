// Object is pairs of key values as like structure of c lang

let person = {
  name: "nikunj gohel",
  age: 18,
  "is Married": false,
};
console.log(typeof (person))
console.log(person); //if we need to access all key of person object

console.log(person.name, person.age, person["is Married"]); //if we need to single key access of person object

console.log(person["name"]);//second method of access key value of person object

// change value of key 

person.age = 20;
console.log("age is : ", person.age);

//forIn  loop in object
console.log("forIn loop");

for (const key in person) {
  console.log(key, " : ", person[key]);
}

//obj is dyanamical data structure because it can change in run time

person.graduate = false;
console.log(person)

//clonening obj
let gerson = { ...person }; // not take reference direct cloaning obj to another obj
person.age = 88;
console.log(person);
console.log(gerson);

let nerson = Object.assign({}, person);// not take reference direct cloaning obj to another obj
console.log(nerson);

