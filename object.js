// Object is pairs of key values as like structure of c lang

let person={
    name:"nikunj gohel",
    age:18,
    "is Married":false,
};

console.log(person); //if we need to access all key of person object

console.log(person.name,person.age,person["is Married"]); //if we need to single key access of person object

console.log(person["name"]);//second method of access key value of person object

// change value of key 

person.age=20;
console.log("age is : ",person.age);

//forIn  loop in object
console.log("forIn loop");

for (const key in person) {
  console.log(key,person[key]);
}

