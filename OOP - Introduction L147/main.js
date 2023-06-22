/*
    [OOP Introduction] L147

What is OOP {
    OOP => stands for Object Oriented Programming
    OOP => Is a parafigm(نمط) or style of code
    OOP => use the concept of object to design a computer program
    OOP => It's not new (Simula is a programming language was developed at 1960)
    => Some languages support OOP and other not
    => Object is a package contains properties and functions that work together to produce something 
    in your application. (Functions here called methods)
}

Why we use OOP? {
    => You will be able to create a large and complex software architecture in organized ways.
    =>You will be able to hide certain parts of code in your project with encapulation to prevent
    mess with this code.
    => You will be able to create reusable objects to use in your application easily 
    with inheritance
}

*/

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
speak() {
        console.log("Animal is speaking!")
    }
}

const myanimal = new Animal("Lion", 20);
myanimal.speak()
console.log(myanimal.name);
console.log(myanimal.age);