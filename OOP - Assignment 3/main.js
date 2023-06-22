/*
    [OOP - Assignment 3]
    Reqiurments {
        You have the following class named "User":
        We need to modify it as you desire to achieve the requirements below:
        First, prevent direct access to the "Card" property.
        When creating users, you notice that each person entered the card number in a different format.
        We need all the numbers to be in string format, and after every 4 digits, there should be a dash (-) as shown in the output.
        Please do not modify the lines of user creation or the console output.
    }
*/

// Edit The Class

class User {
    #c;
    constructor(username, card) {
        this.u = username;
        this.#c = card;
    }
    creditNumber() {
        return this.#c.toString().match(/(\d{4})/g).join("-");
    }
    get showData() {
        return `Hello ${this.u} Your Credit Card Number Is ${this.creditNumber(this.#c)}`;
    }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined