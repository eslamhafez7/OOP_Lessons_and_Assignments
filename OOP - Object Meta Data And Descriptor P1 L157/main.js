/*
    [OOP - Object Meta Data And Descriptor Part 1] L157
    writable
    enumrable
    configurable [cannot delete or reconfigure]
*/

const myObject = {
    a: 1,
    b: 2,
}
Object.defineProperty(myObject, "c", {
    writable: true,
    enumerable: false,
    configurable: false,
    value: 3,
});

Object.defineProperty(myObject, "c", {
    writable: true,
    enumerable: false,
    configurable: true,
    value: 5, // cannot redefine
});


myObject.c = 100;
console.log(delete myObject.c);
for(let prop in myObject) {
    console.log(myObject, [prop]);
}
console.log(myObject);
