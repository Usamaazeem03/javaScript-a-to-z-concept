// Object Literals
const person = {
  name: "Usama",
  age: 30,
  isEmployed: true,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
  info() {
    return `${this.name} is ${this.age} years old.`;
  },
};
console.log(person.name); // Accessing property
person.greet(); // Calling method
person.age = 31; // Modifying property
console.log(person.age); // 31
console.log(person.info()); // Usama is 31 years old.

// Summary ✨
// This code demonstrates the use of object literals in JavaScript. An object named person is created with properties (name, age, isEmployed) and methods (greet, info). The example shows how to access and modify properties, as well as how to call methods defined within the object.
// The use of 'this' keyword within methods refers to the current object, allowing access to its properties. This is a fundamental concept in JavaScript for organizing and managing related data and functionality.
