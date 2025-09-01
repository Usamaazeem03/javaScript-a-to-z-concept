// This keyword
// The 'this' keyword in JavaScript refers to the object it belongs to.
// It has different values depending on where it is used:
// 1. In a method, 'this' refers to the owner object.
// 2. Alone, 'this' refers to the global object (in browsers, it's 'window').
// 3. In a function, 'this' refers to the global object (in strict mode, it's undefined).
// 4. In an event, 'this' refers to the element that received the event.
// 5. With call(), apply(), and bind(), 'this' can be set explicitly.
const person = {
  firstName: "Usama",
  lastName: "Azeem",
  fullName: function () {
    return this, firstName + " " + this.lastName;
  },
};
consle.log(person.fullName()); // Usama Azeem

// Example 2: Using "this" in a method
const user = {
  name: "Uaman",
  age: 22,
  address: { city: "Istanbul", contry: "Turkey" },
  getDetails: function () {
    return `${this.name}, ${this.age}, ${this.address.city}, ${this.address.contry}`;
  },
};
console.log(user.getDetails()); // Usman, 22, Istanbul, Turkey

// Example 3: Using "this" in a regular function
function showThis() {
  console.log(this);
}
showThis(); // In non-strict mode: [object Window] (or global object in Node.js)
// In strict mode: undefined

// Example 4: Using "this" in an event handler
// Note: This example is for browsers
// document.getElementById("myButton").onclick = function(){
//   console.log(this); // Refers to the button element
// };

// Example 5: Using call(), apply(), and bind()
const person1 = {
  fullName: function (city, country) {
    return `${this.firstName} ${this.lastName}, ${city}, ${country}`;
  }, // Note: firstName and lastName are not defined in this object
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
};
console.log(person1.fullName.call(person2, "Oslo", "Norway")); // John Doe, Oslo, Norway
console.log(person1.fullName.apply(person2, ["Oslo", "Norway"])); // John Doe, Oslo, Norway
const boundFunction = person1.fullName.bind(person2, "Oslo", "Norway");
console.log(boundFunction()); // John Doe, Oslo, Norway

// Example 6: Arrow Functions and "this"
const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value); // 42
  },
  arrowFunction: () => {
    console.log(this.value); // undefined, as 'this' does not refer to obj
  },
};
obj.regularFunction(); // 42
obj.arrowFunction(); // undefined
// Note: Arrow functions do not have their own 'this' context; they inherit it from the parent scope.

// Example 7: "this" in Nested Objects
const nestedObj = {
  outerValue: "Outer",
  innerObj: {
    innerValue: "Inner",
    showValues: function () {
      console.log(this.innerValue); // Inner
      console.log(this.outerValue); // undefined, as 'this' refers to innerObj
    },
  },
};
nestedObj.innerObj.showValues(); // Inner
// undefined
// To access outerValue, you can use a reference to the outer object
const that = nestedObj;
nestedObj.innerObj.showValues = function () {
  console.log(this.innerValue); // Inner
  console.log(that.outerValue); // Outer
};
nestedObj.innerObj.showValues(); // Inner, Outer

// Example 8: "this" in Classes
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  showBrand() {
    console.log(this.brand); // Refers to the instance of the class
  }
}
const myCar = new Car("Toyota");
myCar.showBrand(); // Toyota\
// Note: In classes, 'this' refers to the instance of the class.

// Summary ✨
// The 'this' keyword in JavaScript is a powerful feature that allows functions to access properties and methods of the object they belong to. Its value can change based on the context in which it is used, making it essential to understand how 'this' behaves in different scenarios, such as in methods, regular functions, event handlers, and classes. Arrow functions have a unique behavior with 'this', as they do not have their own context and inherit it from the surrounding scope.
// This can sometimes lead to unexpected results, so it's important to be aware of how 'this' works in various situations.
