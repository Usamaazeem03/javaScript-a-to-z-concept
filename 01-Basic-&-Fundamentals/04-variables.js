// varible & hoisting
var a = 10; // global scope

let b = 20; // block scope
const c = 30; // block scope
console.log(a, b, c); // 10 20 30
a = 100; // valid
b = 200; // valid
// c = 300;// invalid
console.log(a, b, c); // 100 200 30

// hoisting
console.log(x); // undefined
var x = 50;
console.log(x); // 50

// If you tried the same with let or const:
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 60;
