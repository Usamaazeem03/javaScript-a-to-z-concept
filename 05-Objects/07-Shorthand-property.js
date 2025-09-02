// Shorthand Property names in JavaScript
const name = "Usama";
const age = 22;
const country = "Pakistan";

// Without shorthand property
const user1 = {
  name: name,
  age: age,
  country: country,
};
console.log(user1); // { name: 'Usama', age: 22, country: 'Pakistan' }

// With shorthand property
const user2 = {
  name,
  age,
  country,
};
console.log(user2); // { name: 'Usama', age: 22, country: 'Pakistan'

// Summary ✨
// This code demonstrates the use of shorthand property names in JavaScript object literals. When the property name and variable name are the same, you can use the shorthand syntax to create more concise and readable code. The example shows both the traditional way of defining object properties and the shorthand method, resulting in identical objects.
// { name: 'Usama', age: 22, country: 'Pakistan' }
