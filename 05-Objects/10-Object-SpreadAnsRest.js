// Object Spread and Reat
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
