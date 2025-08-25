// Data Types in JavaScript
// JavaScript has several built-in data types that can be categorized into primitive and non-primitive types.
// Primitive Data Types

// 1. Number: Represents both integer and floating-point numbers.
let num = 42; // Integer
let floatNum = 3.14; // Floating-point
console.log(typeof num); // "number"
console.log(typeof floatNum); // "number"
// 2. String: Represents a sequence of characters.
let str = "Hello, World!";
console.log(typeof str); // "string"
// 3. Boolean: Represents a logical entity and can have two values: true or false.
let isJavaScriptFun = true;
console.log(typeof isJavaScriptFun); // "boolean"
// 4. Undefined: A variable that has been declared but not assigned a value.
let undef;
console.log(typeof undef); // "undefined"
// 5. Null: Represents the intentional absence of any object value.
let emptyValue = null;
console.log(typeof emptyValue); // "object" (this is a known quirk in Java
// 6. Symbol: Represents a unique identifier.
let sym = Symbol("unique");
console.log(typeof sym); // "symbol"
// 7. BigInt: Represents integers with arbitrary precision.
let bigIntNum = BigInt(9007199254741991);
console.log(typeof bigIntNum); // "bigint"

// Non-Primitive Data Types
// 1. Object: A collection of properties, where each property is defined as a key-value pair.
let obj = { name: "Usama", age: 22 };
console.log(typeof obj); // "object"
// 2. Array: A special type of object used to store ordered collections of values.
let arr = [1, 2, 3, 4, 5]; // Array is a type of object
console.log(typeof arr); // "object"
console.log(Array.isArray(arr)); // true
// 3. Function: A block of code designed to perform a particular task.
function greet() {
  return "Hello!";
}
console.log(typeof greet); // "function"
// Note: In JavaScript, functions are also objects.

// Summary ✨
// JavaScript has a variety of data types, each serving different purposes. Understanding these data types is crucial for effective programming in JavaScript.Script)
