// Block scope example
{
  const blockVar = "I'm a block-scoped variable";
  console.log(blockVar); // Accessible here
}
// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
// Uncommenting the line above will throw an error because blockVar is not accessible outside its block scope.

// Summary ✨
// This code demonstrates the concept of block scope in JavaScript. The variable blockVar is declared inside a block (denoted by curly braces {}). This makes it accessible only within that block. Attempting to access blockVar outside of its block scope results in a ReferenceError, illustrating that variables declared within a block are not accessible from the global scope or other blocks.
