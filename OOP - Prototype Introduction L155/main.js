/*
    [OOP - Prototype Introduction] L155
*/

class User {
    constructor(id, username, portfolio, email, country, day) {
        this.i = id;
        this.u = username;
        this.p = portfolio;
        this.e = email;
        this.c = country;
        this.d = day;
    }
    sayHello () {
        return `Hello ${this.u}`;
    }
}
console.log(User.prototype);
console.log(User.length);


let str = new String("Elzero");
console.log(String.prototype);

let num = new Number(100);
console.log(Number.prototype);