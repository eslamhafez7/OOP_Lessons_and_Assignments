/*
    [OOP - Assignment 1]
*/
// turn this to the new class syntax

// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
// }
// let car1 = new Car("Merceds", 2021, "20000$");
// console.log(car1.n);
// console.log(car1.m);
// console.log(car1.p);


class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run () {
        return `Car Is Running Now`;
    }
    stop () {
        return `Car Is Stopped`;
    }
}

let car1 = new Car("MG ", 2022, "420000");
let car2 = new Car("BMW", 2021, "30000$");
let car3 = new Car("Toyota", 2023, "40000$");
console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`);
console.log(car1.run());