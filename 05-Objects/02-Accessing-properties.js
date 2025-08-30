// Accessing properties(dot and bracket notation)
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "white",
};
// Accessing properties using dot notation
console.log(car.make); // Toyota
console.log(car.model); // Camry
// Accessing properties using bracket notation
console.log(car["year"]); // 2020
console.log(car["color"]); // white
// Modifying properties
car.color = "black"; // Using dot notation
car["year"] = 2021; // Using bracket notation
console.log(car.color); // black
console.log(car.year); // 2021
// Adding new properties
car.owner = "Usama"; // Using dot notation
car["mileage"] = 15000; // Using bracket notation
console.log(car.owner); // Usama
console.log(car.mileage); // 15000

// Summary ✨
// This code demonstrates how to access and modify object properties in JavaScript using both dot notation and bracket notation. An object named car is created with properties such as make, model, year, and color. The example shows how to access these properties using both methods, modify existing properties, and add new properties to the object. Dot notation is typically used for property names that are valid identifiers, while bracket notation is useful for property names that contain spaces or special characters, or when the property name is stored in a variable.
