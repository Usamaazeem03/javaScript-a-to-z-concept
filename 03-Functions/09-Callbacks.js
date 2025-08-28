// Callbacks
function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback(); // Call the callback function
}
function sayGoodbye() {
  // Callback function
  console.log("Goodbye!");
}
greet("Usama", sayGoodbye); // Call the greet function with sayGoodbye as a callback
// Output:
// Hello, Usama!
// Goodbye!

// Summary ✨
// This code demonstrates the use of callbacks in JavaScript. The greet function takes a name and a callback function as parameters. It prints a greeting message and then calls the provided callback function.
// The sayGoodbye function is defined as a callback that prints a goodbye message. The greet function is called with the name "Usama" and the sayGoodbye function as arguments, resulting in both messages being printed to the console.
