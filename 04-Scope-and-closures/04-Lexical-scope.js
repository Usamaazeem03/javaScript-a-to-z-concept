// Lexical Scope
// Lexical scope means that the scope of a variable is determined by its position in the source code (where it is written).
// Inner functions have access to variables declared in their outer (enclosing) functions, even after the outer function has finished executing.
function outerFunction() {
  const outerVar = "I'm from the outer function";

  function innerFunction() {
    console.log(outerVar); // Accessible here due to lexical scope
  }

  return innerFunction;
}
const myInnerFunction = outerFunction();
myInnerFunction(); // Logs: "I'm from the outer function"

// Summary ✨
// This code demonstrates the concept of lexical scope in JavaScript. The inner function innerFunction has access to the variable outerVar declared in its outer function outerFunction. Even after outerFunction has finished executing and returned innerFunction, the inner function can still access outerVar due to lexical scoping. This illustrates how functions retain access to their lexical environment.
