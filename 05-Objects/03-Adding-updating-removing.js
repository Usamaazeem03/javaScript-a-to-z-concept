// Adding/updating/removing propertes
const person = {
  name: "Usama",
  age: 22,
  isEmployed: true,
};

// Adding new property
person.city = "google silicon valley"; // Using dot notation
person["ageGroup"] = "young adult"; // Using bracket notation
console.log(person.city); // google silicon valley
console.log(person.ageGroup); // young adult

// Updating existing property
person.age = 23; // Using dot notation
person["isEmployed"] = false; // Using bracket notation
console.log(person.age); // 23
console.log(person.isEmployed); // false

// Removing property
delete person.city; // Using dot notation
delete person["ageGroup"]; // Using bracket notation
console.log(person.city); // undefined
console.log(person.ageGroup); // undefined

//Summary ✨
// This code demonstrates how to add, update, and remove properties from a JavaScript object. An object named person is created with initial properties such as name, age, and isEmployed. The example shows how to add new properties (city and ageGroup) using both dot notation and bracket notation. It also illustrates how to update existing properties (age and isEmployed) using both notations. Finally, the code demonstrates how to remove properties from the object using the delete operator with both dot and bracket notation. This is essential for managing dynamic data within objects in JavaScript.
