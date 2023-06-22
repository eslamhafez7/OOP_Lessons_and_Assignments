/*
    [OOP - Class Inheritance] L153
*/

// Parent class

class User {
    constructor (id, username) {
        this.i = id;
        this.u = username;
    }
    sayHello() {
        return `Hello ${this.u}`
    }
}
let userone = new User(100, "Eslam");
let usertwo = new User(101, "Osama");

console.log(userone.i);
console.log(userone.u);
console.log(userone.sayHello());

console.log("#".repeat(10));

console.log(usertwo.i);
console.log(usertwo.u);
console.log(usertwo.sayHello());

console.log("#".repeat(10));

// Derived class

class Admin extends User {
    constructor(id, username, premissions) {
        super(id, username);
        this.p = premissions;
    }
}

let admin = new Admin(110, "Sara", "RWX");
let admin2 = new Admin(111, "Mohammed", "RW");

console.log(admin.i);
console.log(admin.u);
console.log(admin.p);
console.log(admin.sayHello());

console.log("#".repeat(10));

console.log(admin2.i);
console.log(admin2.u);
console.log(admin.p);
console.log(admin2.sayHello());

console.log("#".repeat(10));

// Anothe derived one

class Superman extends Admin {
    constructor(id, username, premissions, ability) {
        super(id, username, premissions);
        this.a = ability;
    }
}

let superman1 = new Superman(112, "Koko", "R", "Super Power");

console.log(superman1.i);
console.log(superman1.u);
console.log(superman1.p);
console.log(superman1.a);
console.log(superman1.sayHello());
