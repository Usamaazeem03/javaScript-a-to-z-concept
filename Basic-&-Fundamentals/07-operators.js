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

// Bitwise Operators
let num1 = 5; // Binary: 0101
let num2 = 3; // Binary: 0011
console.log(num1 & num2); // AND: 1 (Binary: 0001)
console.log(num1 | num2); // OR: 7 (Binary: 0111
console.log(num1 ^ num2); // XOR: 6 (Binary: 0110)
console.log(~num1); // NOT: -6 (Binary: ...11111010)
console.log(num1 << 1); // Left shift: 10 (Binary: 1010)
console.log(num1 >> 1); // Right shift: 2 (Binary: 0010)
console.log(num1 >>> 1); // Unsigned right shift: 2 (Binary: 0010)

//spread Operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // [1, 2, 3, 4, 5, 6]

//rest Operator
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(5, 10, 15)); // 30

// Optional Chaining Operator (?.)
let user = {
  name: "Usama",
  address: {
    city: "Istanbul",
  },
};
console.log(user?.address?.city); // "Wonderland"
console.log(user?.contact?.phone); // undefined (no error)

// Nullish Coalescing Operator (??)
let foo = null ?? "default string";
console.log(foo); // "default string"
let bar = 0 ?? 42;
console.log(bar); // 0 (because 0 is not null or undefined)
let baz = undefined ?? "fallback";
console.log(baz); // "fallback"

// Summary ✨
// This code demonstrates various types of operators in JavaScript including arithmetic, assignment, comparison, logical, string, ternary, typeof, bitwise, spread, rest, optional chaining, and nullish coalescing operators. Each operator is illustrated with examples to show how they work and their outputs.
// Each section includes comments explaining the purpose and functionality of the operators used.
console.log(user?.address?.city); // "Istanbul"
console.log(user?.contact?.phone); // undefined (no error)
