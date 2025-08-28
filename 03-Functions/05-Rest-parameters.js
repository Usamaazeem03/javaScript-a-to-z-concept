// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100
console.log(sum()); // Output: 0

// Summary ✨
// This code demonstrates the use of rest parameters in JavaScript functions. The sum function uses the
// rest parameter syntax (...numbers) to accept an indefinite number of arguments as an array.
// The function then calculates the sum of all the numbers using the reduce method and returns the result
// Rest parameters allow functions to handle variable numbers of arguments, making them more flexible and versatile.
// Functions help in organizing code into reusable blocks, making it easier to read and maintain.
// Functions can take parameters and return values, as shown in this example where the sum function returns the total sum of the input numbers.
