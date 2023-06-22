/*
    [OOP - Update Properties And Built In Constructors] L151
*/
class User {
    constructor(id, username, salary) {
        this.i = id;
        this.u = username;
        this.s = salary;
    }
    updateName(newname) {
        this.u = newname;
    }
}

let userOne = new User(100, "Elzero", 5000);
console.log(userOne.u);
userOne.updateName("Osama");
console.log(userOne.u);

let str1 = "Elzero";
let str2 = new String("Elzero");

console.log(typeof str1); // String
console.log(typeof str2); // Object

console.log(str1 instanceof String); // false
console.log(str2 instanceof String); // true

console.log(str1.constructor === String); // true
console.log(str2.constructor === String); // true

let num1 = 1000;
let num2 = new Number(200);

console.log(typeof num1); // Number
console.log(typeof num2); // Object

console.log(num1 instanceof Number); // false
console.log(num2 instanceof Number); // true

console.log(num1.constructor === Number); // true
console.log(num2.constructor === Number); // true