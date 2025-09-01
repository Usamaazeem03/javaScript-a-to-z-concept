// Nested Objects
const user = {
  name: "Usman",
  age: 22,
  address: {
    // Nested Object
    street: "123 Main St",
    city: "Lahore",
    country: "Pakistan",
  },
};
console.log(user.address.city); // Lahore

// Modifying Nested Objects
user.address.city = "Karachi";
console.log(user.address.city); // Karachi
user.address.zipCode = "12345"; // Adding new property
console.log(user.address.zipCode); // 12345

// Deleting Nested Properties
delete user.address.street;
console.log(user.address.street); // undefined
console.log(user);
// {
//   name: 'Usman',
//   age: 22,
//   address: { city: 'Karachi', country: 'Pakistan', zipCode: '12345' }
// }
// Accessing Deeply Nested Properties
const company = {
  name: "Texnology Inc.",
  address: {
    street: "456 Corporate Blvd",
    city: "Islamabad",
    country: "Pakistan",
    office: {
      floor: 5,
      room: "501A",
    },
  },
};
console.log(company.address.office.room); // 501A

// Optional Chaining (ES2020)
console.log(company.address.office?.room); // 501A
console.log(company.address.warehouse?.room); // undefined
console.log(company.address.warehouse.room); // Error: Cannot read property 'room' of undefined

// Looping through Nested Objects
for (const key in user.address) {
  console.log(`${key}: ${user.address[key]}`);
}
// city: Karachi
// country: Pakistan
// zipCode: 12345

// Checking for Nested Properties
console.log("city" in user.address); // true
console.log(user.address.hasOwnProperty("street")); // false

// Nested Object Methods
user.getFullAddress = function () {
  return `${this.address.street}, ${this.address.city}, ${this.address.country}`;
};
console.log(user.getFullAddress()); // undefined, Karachi, Pakistan
// Note: street is deleted earlier, so it returns undefined for street
// To fix it, let's add street back
user.address.street = "123 Main St";
console.log(user.getFullAddress()); // 123 Main St, Karachi, Pakistan

// Cloning Nested Objects
const clonedUser = JSON.parse(JSON.stringify(user));
clonedUser.name = "Ali";
clonedUser.address.city = "istanbul";
console.log(user.name); // Usman
console.log(user.address.city); // Karachi
console.log(clonedUser.name); // Ali
console.log(clonedUser.address.city); // istanbul
// Note: JSON methods create a deep clone, so changes in clonedUser do not affect user
// However, this method has limitations (e.g., it doesn't clone functions or special object types like Date)
// For more complex cloning, consider using libraries like Lodash's _.cloneDeep()

// Summary ✨
// This code demonstrates how to work with nested objects in JavaScript, including accessing, modifying, deleting properties, using optional chaining, looping through properties, checking for existence, adding methods, and cloning nested objects.nst clonedUser = JSON.parse(JSON.stringify(user));
clonedUser.name = "Ali";
clonedUser.address.city = "istanbul";
