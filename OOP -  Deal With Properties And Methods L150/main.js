/*
    [OOP - Deal With Properties And Methods] L150
*/


class User {
    constructor(id, username, salary) {
        // Properties
        this.i = id;
        this.u = username || "Unknown";
        this.s = salary < 6000 ? salary + 500 : salary;
        this.msg = function() {
            return `Hello ${this.u} Your Salary Is ${this.s}`
        }
    }
    // Method
    writeMsg() {
        return `Hello ${this.u} Your Id is ${this.i}.`;
    }
}

let userOne = new User(100, "", 5000);
let userTwo = new User(102, "Eslam", 6000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.writeMsg());

console.log(userTwo.i);
console.log(userTwo.u);
console.log(userTwo.s);
console.log(userTwo.msg());
console.log(userTwo.writeMsg()); // this is a method not property
console.log(userTwo.msg); // if not added () it will return Native Code
console.log(userTwo.writeMsg); // same
