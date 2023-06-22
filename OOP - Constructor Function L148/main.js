/*
    [OOP - Constructor Function] L148
    Start Your Function name with uppercase letter (Best Practice)
*/

function User(id, user, salary) {
    this.i = id;
    this.n = user;
    this.s = salary + 1000;
}
let userOne = new User(100, "Eslam", 5000);
let userTwo = new User(101, "Osama", 6000);
let userThree = new User(102, "Sara", 7000);
console.log(userOne.i);
console.log(userOne.n);
console.log(userOne.s);
console.log("$".repeat(20));

console.log(userTwo.i);
console.log(userTwo.n);
console.log(userTwo.s);
console.log("$".repeat(20));

console.log(userThree.i);
console.log(userThree.n);
console.log(userThree.s);



// [EXAMPLES]

// Class and Object:

class Car {
    constructor(color, speed){
        this.c = color;
        this.s = speed + 100;
    }
}
let mycar = new Car("red", 10);
console.log(mycar.s);


// Inheritance:

class Animal{
    constructor(name, age) {
        this.n = name;
        this.a = age;
    }
    speak() {
        console.log("Animals Speak")
    }
}

class Dog extends Animal {
    speak() {
        console.log("Woaf!")
    }
}

class Cat extends Animal {
    speak() {
        console.log("Moew!")
    }
}

const dog = new Dog("Buddy");
dog.speak();
const cat = new Cat("Whiskers");
cat.speak();

// Encapsulation:

class BankAccount {
    constructor(balance) {
        this.balance = 0;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        return this.balance += amount;
    }
    withdraw(amount) {
        if(amount <= this.balance) {
            this.balance -= amount;
        }
    }
}
const account = new BankAccount();
account.deposit(1000);
account.withdraw(500);
let currentBalance = account.getBalance();
console.log(currentBalance);