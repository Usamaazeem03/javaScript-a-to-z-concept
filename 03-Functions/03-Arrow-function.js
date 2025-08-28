// Arrow function
const name = "Usama";
const age = 23;
const isStudent = true;
const hobbies = ["drawing", "CODIING", "gym"];
const address = {
  street: "123 Main St",
  city: "Anytown",
  country: "Pakistan",
};
const greet = () => {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
};
const displayAddress = () => {
  console.log(
    `I live at ${address.street}, ${address.city}, ${address.country}.`
  );
};
greet();
displayAddress();
// Summary ✨
// This code demonstrates the use of arrow functions in JavaScript. Two arrow functions, greet and
// displayAddress, are defined to print a greeting message and an address message, respectively. The functions are then called to execute their code.
// Arrow functions provide a shorter syntax compared to traditional function expressions and do not have their own '
// this' context, making them useful in certain scenarios.
// Functions help in organizing code into reusable blocks, making it easier to read and maintain.
// Functions can take parameters and return values, but in this example, they simply perform console logging.
// Note: Functions can be declared using function declarations, function expressions (using arrow functions or anonymous functions).
// Function declarations are hoisted, meaning they can be called before they are defined in the code.
// Function expressions are not hoisted and must be defined before they are called.
