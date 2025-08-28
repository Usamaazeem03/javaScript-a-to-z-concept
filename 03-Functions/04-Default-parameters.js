// Default Parameters
function greet(name = "unknown") {
  console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, unknown!
greet("Usama"); // Output: Hello, Usama!

// Summary ✨
// This code demonstrates the use of default parameters in JavaScript functions. The greet function has a default parameter name with a value of "unknown". If the function is called without an argument, it uses the default value. If an argument is provided, it overrides the default value.
// Default parameters allow functions to have optional parameters, making them more flexible and easier to use.
// Functions help in organizing code into reusable blocks, making it easier to read and maintain.
