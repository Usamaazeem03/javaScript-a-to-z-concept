// Global scope
const globalVar = "I'm a global variable";
function showGlobalVar() {
  console.log(globalVar); // Accessible here
}
showGlobalVar();
console.log(globalVar); // Accessible here too

// Summary ✨
// This code demonstrates the concept of global scope in JavaScript. The variable globalVar is declared in the global scope, making it accessible from anywhere in the code, including inside the function showGlobalVar and outside of it. The function prints the value of globalVar, and it is also printed directly in the global context.
