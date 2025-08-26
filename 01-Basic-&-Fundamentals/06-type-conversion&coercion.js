// Type Conversion and Coercion
// Type Conversion: Manually converting from one type to another
let num = 42;
let str = String(num); // Convert number to string
console.log(str, typeof str); // "42" "string"
let bool = Boolean(num); // Convert number to boolean
console.log(bool, typeof bool); // true "boolean"
let strNum = "123";
let convertedNum = Number(strNum); // Convert string to number
console.log(convertedNum, typeof convertedNum); // 123 "number"
let strBool = "true";
let convertedBool = strBool === "true"; // Convert string to boolean
console.log(convertedBool, typeof convertedBool); // true "boolean"

// Type Coercion: Automatic conversion by JavaScript engine
let result1 = "5" + 10; // Number 10 is coerced to string
console.log(result1, typeof result1); // "510" "string"
let result2 = "5" - 2; // String '5' is coerced to number
console.log(result2, typeof result2); // 3 "number"
let result3 = "5" * "2"; // Both strings are coerced to numbers
console.log(result3, typeof result3); // 10 "number"
let result4 = "10" / 2; // String '10' is coerced to number
console.log(result4, typeof result4); // 5 "number"
let result5 = 5 + true; // Boolean true is coerced to number 1
console.log(result5, typeof result5); // 6 "number"
let result6 = 5 + false; // Boolean false is coerced to number 0
console.log(result6, typeof result6); // 5 "number"
let result7 = null + 5; // null is coerced to number 0
console.log(result7, typeof result7); // 5 "number"
let result8 = undefined + 5; // undefined is coerced to NaN
console.log(result8, typeof result8); // NaN "number"

// Summary ✨
// Type conversion is the manual process of converting data from one type to another, while type coercion is the automatic conversion performed by the JavaScript engine during operations. Understanding both concepts is crucial for effective JavaScript programming.
// (This is a JavaScript file, not a JSON
// file, so it can be run in any JavaScript environment like a web browser or Node.js)
