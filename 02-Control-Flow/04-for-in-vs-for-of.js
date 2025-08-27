// for in vs for of loop
const myArray = ["apple", "banana", "cherry"];
// for...in loop (iterates over indices)
for (const index in myArray) {
  console.log(`Index: ${index}, Value: ${myArray[index]}`);
}

// for...of loop (iterates over values)
for (const value of myArray) {
  console.log(`Value: ${value}`);
}
// Summary ✨
// This code demonstrates the difference between for...in and for...of loops in JavaScript. The for...in loop iterates over the indices of an array, while the for...of loop iterates over the values of the array.
// Use for...in when you need the index, and for...of when you need the value.
// Note: for...in is generally used for objects, while for...of is used for iterable objects like arrays, strings, etc.
// However, for...in can be used with arrays as shown above, but it's not the preferred method.
