/*
    [OOP - Add To Prototype Chain And Constructor Features] L156
    Add to prototype chain
    Extend built in constructors features
*/


class User {
    constructor(id, username, salary) {
        this.i = id;
        this.u = username;
    }
    sayHello () {
        return `Hello ${this.u}`;
    }
}
let userone = new User(100, "Elzero");
console.log(userone.u);
console.log(User.prototype);
console.log(userone);
console.log(userone.sayHello());

User.prototype.sayWelcome = function() {
    return `Welcome ${this.u}`;
}
console.log(userone.sayWelcome());

Object.prototype.love = "Elzero Web School";
console.log(`We love ${userone.love}`);

String.prototype.addDotBeforeAndAfter = function(val) {
    return `.${this}.`
};
let mystring = ("Elzero");
console.log(mystring.addDotBeforeAndAfter());