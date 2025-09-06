// Object Spread and Rest
const birdDertails = {
  name: "Crow",
  coler: "black",
};

const birdHabitat = {
  region: "South Africa",
  climate: "warm to hot",
};

const parrotInfo = {
  ...birdDertails,
  ...birdHabitat,
};

console.log(parrotInfo);
// name: "Crow",
// coler: "black",
// region: "South Africa",
// climate: "warm to hot"

// Exempal 2 Overriding with Spread
const car = {
  brand: "Toyota",
  name: "Toyota Corolla",
  color: "white",
};

const newCar = {
  ...car,
  spread: "220km/h",
  brand: "Honda",
  name: "Honda Civic",
};

console.log(newCar);
// brand: "Honda",
// name: "Honda Civic",
// color: "white",
// speed: "220km/h"

// Rest
const student = {
  name: "Usama",
  age: 22,
  grade: "4.5",
  city: "Karachi",
};
// Directly
const { name, age, ...another } = student;
console.log("Directly Remaining properties:", another);
console.log("Directly Name and Age:", name, age);

// Inside function
function remaProp({ name, age, ...another }) {
  console.log("Remaining properties:", another);
  console.log("Name and Age:", name, age);
}
remaProp(student);

// Summary ✨
// 1. Object Spread
// . You used (...) to merge two objects like(birdDertails + birdHabitat) into a new object parratInfo.
// . You also showed how to override existing properties (brand, name) when spreading int a new object newCar.

// 2. Object Rest
// . You used rest(...another) to collect the remaining properties of an object after extractingsome (name, age),
// . You demonstrated this both directly with destructuring and inside a function.

// ✅ This file clearly explains how Spread and Rest work with objects:
// . Spread(...)--> Copy/merge/override object properties.
// . Rest(...)--> Extract the remaining properties into a new object.
