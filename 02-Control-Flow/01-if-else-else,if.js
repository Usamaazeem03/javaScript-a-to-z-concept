// if else and else if statements
let age = 17;
if (age >= 18) {
  console.log("You are an adult.");
} else if (age === 17) {
  console.log("You are almost an adult."); // else if statemen
} else {
  console.log("You are a minor.");
}

// Nested if statements
let num = 10;
if (num > 0) {
  if (num % 2 === 0) {
    console.log("The number is positive and even.");
  } else {
    console.log("The number is positive and odd.");
  }
} else {
  console.log("The number is not positive.");
}
// if-else shorthand (ternary operator)
let isMember = true;
let discount = isMember ? 0.1 : 0; // 10% discount for members
console.log(`Your discount is ${discount * 100}%.`); // Your discount is 10%.

// summary ✨
// This code demonstrates the use of if, else if, and else statements in JavaScript to
// control the flow of execution based on conditions. It includes examples of basic
// if-else statements, nested if statements, and the ternary operator for shorthand
// conditional expressions. Each example is illustrated with clear code and outputs.
// Each section includes comments explaining the purpose and functionality of the code used.
