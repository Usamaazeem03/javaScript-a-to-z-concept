// function declaration
const name = "Usama";
const age = 23;
const isStudent = true;
const hobbies = ["notReading", "CODIING", "gaming"];
const address = {
  street: "123 Main St",
  city: "Anytown",
  country: "Pakistan",
};
function greet() {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}
function displayAddress() {
  console.log(
    `I live at ${address.street}, ${address.city}, ${address.country}.`
  );
}
greet();
displayAddress();

// Summary ✨
// This code demonstrates the declaration and usage of functions in JavaScript. Two functions, greet and
// displayAddress, are defined to print a greeting message and an address message, respectively. The functions are then called to execute their code.
// Functions help in organizing code into reusable blocks, making it easier to read and maintain.
// Functions can take parameters and return values, but in this example, they simply perform console logging.
// Note: Functions can be declared using function declarations (as shown above) or function expressions (using arrow functions or anonymous functions).
// Function declarations are hoisted, meaning they can be called before they are defined in the code.
// Function expressions are not hoisted and must be defined before they are called.
// Arrow functions provide a shorter syntax and do not have their own 'this' context, making them useful in certain scenarios.
// Functions can also be nested, meaning one function can be defined inside another function.
// Functions can be assigned to variables, passed as arguments to other functions, and returned from other functions, enabling higher-order functions and functional programming concepts.
// Functions can also be used as methods within objects, allowing for object-oriented programming in JavaScript.
// Functions can also be asynchronous, allowing for non-blocking code execution using callbacks, promises, or async/await syntax.
// Functions can also have default parameters, allowing for optional arguments when calling the function.
// Functions can also use rest parameters to accept a variable number of arguments as an array.
// Functions can also use the spread operator to expand an array into individual arguments when calling a function.
