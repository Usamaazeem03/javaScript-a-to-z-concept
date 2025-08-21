// JavaScript basic syntax example
// This file demonstrates basic JavaScript syntax including variable declarations, functions, conditionals, loops, and more.
// 1 variable declaration
let name = "usama";
let age = 22;
let isStudent = true;
let job = null;
let hobbies = ["reading", "gaming", "coding"];
let address = {
  street: "123 Main St",
  city: "Anytown",
  country: "Pakistan",
};

// 2 function declaration
function greet() {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

// 3 conditional statement
if (isStudent) {
  console.log("I am a student.");
} else {
  console.log("I am not a student.");
}

// 4 loop example
for (let i = 0; i < hobbies.length; i++) {
  console.log(`Hobby ${i + 1}: ${hobbies[i]}`);
}

// 5 object method
function displayAddress() {
  console.log(
    `I live at ${address.street}, ${address.city}, ${address.country}.`
  );
}
// greet();
// displayAddress();

// 6 arrow function
const add = (a, b) => a + b;

// 7 template literals
const message = `My name is ${name} and I am ${age} years old.
I enjoy ${hobbies.join(", ")}.`;
console.log(message);

// 8 destructuring assignment
const { street, city, country } = address;
console.log(`Address: ${street}, ${city}, ${country}`);

// 9 spread operator
const newHobbies = [...hobbies, "traveling", "photography"];
console.log("Updated hobbies:", newHobbies);

// 10 rest parameter
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log("Sum of numbers:", sum(1, 2, 3, 4, 5));

// 11 default parameters
function multiply(a, b = 1) {
  return a * b;
}
console.log("Multiplication result:", multiply(5)); // b defaults to 1

// 12 for...of loop
for (const hobby of hobbies) {
  console.log(`Hobby: ${hobby}`);
}
// 13 for...in loop
for (const key in address) {
  console.log(`${key}: ${address[key]}`);
}
