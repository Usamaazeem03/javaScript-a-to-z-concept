// Object.keys / Object.values / Object.entries

// object.key()
const user = {
  name: "Usama",
  age: 22,
  haveCar: false,
};

// Get all the keys of the object
console.log(Object.keys(user)); //["name","age","haveCar"]

// Object.values()
console.log(Object.values(user)); //["usama",22,false]

// Object.entries
console.log(Object.entries(user)); // [["name", "Usama"], ["age", 22], ["haveCar", false]]
