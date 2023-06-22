/*
    [OOP - Object Meta Data And Descriptor Part 2] L158
    Define multiable properties
    Check descriptors
*/

const myObject = {
    a: 1, 
    b: 2,
};

Object.defineProperties(myObject, {
    c: {
        configurable: true,
        value: 3,
    },
    d: {
        configurable: true,
        value: 4,
    },
    e: {
        configurable: true,
        value: 5,
    },
});

console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject, "e"));
console.log(Object.getOwnPropertyDescriptors(myObject));