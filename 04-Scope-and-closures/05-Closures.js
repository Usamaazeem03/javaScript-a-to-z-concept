// Closures real-life use cases
// A closure is the combination of a function and the lexical environment within which that function was declared.
// This environment consists of any local variables that were in-scope at the time the closure was created.
function makeCounter() {
  let count = 0; // count is a private variable

  return function () {
    count += 1; // Accessing the outer function's variable
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // Logs: 1
console.log(counter()); // Logs: 2
console.log(counter()); // Logs: 3
// The count variable is not accessible from the global scope
// console.log(count); // Uncaught ReferenceError: count is not defined
/*
🚀 Real-Life Use Cases of Closures
1_Data Privacy 🔒 → For creating private variables that cannot be accessed directly from outside.
2_Function Factories 🏭 → To generate multiple customized functions from a single function.
3_State Management ⏳ → To preserve state in asynchronous code such as event listeners, callbacks, or timers.
*/
// Summary ✨
// This code demonstrates the concept of closures in JavaScript. The function makeCounter creates a private variable count and returns an inner function that increments and returns the value of count. Each time the returned function is called, it has access to the count variable, even though makeCounter has finished executing. This illustrates how closures allow functions to retain access to their lexical environment, enabling data encapsulation and privacy.
// Closures are commonly used for data privacy, function factories, and maintaining state in asynchronous programming.
