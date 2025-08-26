// Operators
// Arithmetic Operators
let a = 10;
let b = 3;
console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.3333...
console.log(a % b); // Modulus: 1 (remainder of 10 divided by 3)
console.log(a ** b); // Exponentiation: 1000 (10 to the power of 3)
console.log(++a); // Increment: 11
console.log(--b); // Decrement: 2
// Assignment Operators
let c = 5;
c += 2; // c = c + 2
console.log(c); // 7
c -= 3; // c = c - 3
console.log(c); // 4
c *= 4; // c = c * 4
console.log(c); // 16
c /= 2; // c = c / 2
console.log(c); // 8
c %= 3; // c = c % 3
console.log(c); // 2
c **= 3; // c = c ** 3
console.log(c); // 8
// Comparison Operators
console.log(a == b); // Equal to: false
console.log(a != b); // Not equal to: true
console.log(a === b); // Strict equal to: false
console.log(a !== b); // Strict not equal to: true
console.log(a > b); // Greater than: true
console.log(a < b); // Less than: false
console.log(a >= b); // Greater than or equal to: true
console.log(a <= b); // Less than or equal to: false
// Logical Operators
let x = true;
let y = false;
console.log(x && y); // Logical AND: false
console.log(x || y); // Logical OR: true
console.log(!x); // Logical NOT: false
console.log(!y); // Logical NOT: true
// String Operators
let str1 = "Hello, ";
let str2 = "World!";
console.log(str1 + str2); // Concatenation: "Hello, World!"
console.log((str1 += str2)); // Concatenation assignment: "Hello, World!"
// Ternary Operator
let age = 18;
let canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";
console.log(canVote); // "Yes, can vote"
// Typeof Operator
console.log(typeof a); // "number"
console.log(typeof str1); // "string"
console.log(typeof x); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known quirk in JavaScript)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"

// Summary ✨
// JavaScript provides a variety of operators to perform operations on variables and values. Understanding these operators
// is essential for effective programming in JavaScript.
// (This is a JavaScript file, not a JSON
// file, so it can be run in any JavaScript environment like a web browser or Node.js)
