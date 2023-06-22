/*
    [OOP - Assignment 2]
    Requirements {
        => We have the following class called "Phone":
        => We need to create another class called "Tablet"
        that inherits the properties from the "Phone" class.
        =>  The "Tablet" class should have an additional property
        called "size" and a method called "fullDetails".
        => We have used the "Tablet" class to create multiple tablets
        => Then, we have used the "fullDetails" method, which prints information about the tablet
        => If the size property is not provided, it should display the word "Unknown".
    }
*/

class Phone {
    constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
    }
}
class Tablet extends Phone {
    constructor(name, serial, price, size) {
        super(name, serial, price);
        this.size = size || "Unknown";
    }
    fullDetails() {
        return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
    }
}
let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(TabletOne.fullDetails());
// iPad Serial is 100200300 And Size Is 12.9

console.log(TabletTwo.fullDetails());
// Nokia Serial is 350450650 And Size Is 10.5

console.log(TabletThree.fullDetails());
// LG Serial is 250450650 And Size Is Unknown