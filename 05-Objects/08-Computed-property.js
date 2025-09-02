// Computed Property
const key1 = "name"; // this is called dynamic property and also called computed property
const key2 = "age";

const user = {
  [key1]: "Usama",
  [key2]: 22,
  country: "Pakistan",
};
console.log(user); // { name: 'Usama', age: 22, country: 'Pakistan' }

// Summary ✨
// This code demonstrates the use of computed property names in JavaScript object literals. By using square brackets around a variable name, you can dynamically set the property name of an object based on the value of that variable. This allows for more flexible and dynamic object creation, especially when property names need to be determined at runtime. The example shows how to create an object with properties whose names are derived from variables, resulting in an object with the expected key-value pairs.
