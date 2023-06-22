/*
    [Class Encapsulation] L154
    => Class Fields are public by default
    => Guards the data against Illegal access
    => Helps to achieve the target without revealing its complex details
    => Will reduse human errors
    => Make the more flexiable and manageble
    => Simplifies the app
    => You can inherit method or property from private class
    */
class User {
    #s;
    constructor(id, username, salary) {
        this.i = id;
        this.u = username;
        this.#s = salary;
    }
    getSalary () {
        return parseInt(this.#s);
    }
    sayHello () {
        return `Hello ${this.u}`;
    }
}
let userOne = new User(100, "elzero", "5000 gneh");

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.getSalary() * 3); // 15000

console.log("#".repeat(20));
class Superuser extends User{
    constructor(id, username, salary, premissions) {
        super(id, username, salary);
        this.p = premissions;
    }
}
let superuser1 = new Superuser(102, "Eslam", "2000 hddcvdx$", "RWX");

console.log(superuser1.i);
console.log(superuser1.u);
console.log(superuser1.getSalary() * 2); 4000
console.log(superuser1.p);