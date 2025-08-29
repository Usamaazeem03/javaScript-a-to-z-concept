// Function scope
function functionScopeExample() {
  const functionVar = "I'm a function-scoped variable";
  console.log(functionVar); // Accessible here
}
functionScopeExample();
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined
// Uncommenting the line above will throw an error because functionVar is not accessible outside its function scope.

// Summary ✨
// This code demonstrates the concept of function scope in JavaScript. The variable functionVar is declared inside the function functionScopeExample, making it accessible only within that function. Attempting to access functionVar outside of its function scope results in a ReferenceError, illustrating that variables declared within a function are not accessible from the global scope or other functions.
