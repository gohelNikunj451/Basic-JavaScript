class Human {
  name;
  age;
  #bankAccNum = "21412312"; // private #
  constructor(Cname, Cage) {
    this.name = Cname;
    this.age = Cage;
  }
  showName() {
    console.log("your name is : ", name);
  }
  showAge() {
    console.log("Your age is : ", age);
  }
  showBankAccNum() {
    console.log("your bank num : ", this.#bankAccNum);
  }
}
console.log(new Human());
let nikunj = (new Human("nikunj", 66));
console.log(nikunj);
nikunj.showBankAccNum();