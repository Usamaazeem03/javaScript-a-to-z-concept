// Object Mathods
const user = {
  name: "Usama",
  age: 22,
  greet: function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};
console.log(user.greet()); // Hello, my name is Usama and I am 22 years old.

// Example 2: Method to update age
user.setAge = function (newAge) {
  this.age = newAge;
};
user.setAge(23);
console.log(user.age); // 23

// Example 3: Method to check if user is adult
user.isAdult = function () {
  return this.age >= 18;
};
console.log(user.isAdult()); // true

// Example 4: Using Object methods
const mobile = {
  berand: "Vivo",
  model: "v30",
  price: 120000,
  getDetails: function () {
    return `${this.berand} ${this.model} costs ${this.price}`;
  },
};
console.log(mobile.getDetails()); // Vivo v30 costs 120000

// Summary ✨
// This code demonstrates how to define and use methods within JavaScript objects. Methods are functions that are properties of an object, allowing the object to perform actions or computations using its own data. The examples include methods for greeting, updating properties, and checking conditions based on the object's state. The use of 'this' within methods refers to the object itself, enabling access to its properties. Additionally, the code shows how to add methods to existing objects dynamically.
