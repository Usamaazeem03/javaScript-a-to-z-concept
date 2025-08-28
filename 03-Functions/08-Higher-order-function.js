// Higher Order Function
const operate = function (a, b, operation) {
  return operation(a, b); // Call the passed function
};
const add = function (x, y) {
  // Anonymous function to add two numbers
  return x + y;
};
const result = operate(5, 3, add); // Call the higher-order function with the add function as an argument
console.log(result); // Output: 8

// Summary ✨
// This code demonstrates the concept of higher-order functions in JavaScript. The operate function takes two numbers and a function (operation) as parameters. It calls the passed function with the two numbers and returns the result.
// The add function is defined as an anonymous function that adds two numbers. The operate function is then called with the arguments 5, 3, and the add function, and the result is printed to the console.
