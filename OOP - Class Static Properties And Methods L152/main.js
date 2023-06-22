/*
    [OOP - 
        Class - Static Properties And Methods] L152
    static property
*/

class User {
    static count = 0;
    constructor(id, username, salary){
        this.i = id;
        this.u = username;
        this.s = salary;
        User.count++;
    }
    static sayHello() {
        return 'Hello From Class';;
    }
    static countMmbrs() {
        return `${this.count} Members`;
    }
}

let userone = new User(100, "Elzero", 5000);
let usertwo = new User(100, "Eslam", 6000);
let userthree = new User(100, "Eslam", 6000);
let userfour = new User(100, "Eslam", 6000);
let userfive = new User(100, "Eslam", 6000);

console.log(userone.s);
console.log(usertwo.s);
console.log(usertwo.count);
console.log(User.count);
console.log(User.sayHello());
console.log(User.countMmbrs());