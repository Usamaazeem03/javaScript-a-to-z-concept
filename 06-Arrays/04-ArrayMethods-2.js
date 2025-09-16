// Array NON-Mutating Methods
// map(), filter(), reduce, forEach(), find(), findindex(), some(), every(), includes(),indexof(), flat(), flatMap()
const numbers = [3, 7, 10, 15, 20, 25];
// ✅ map(): Creates a NEW array by transforming each element
const doubledNum = numbers.map((num) => num * 2);
console.log(doubledNum); // 6, 14, 20, 30, 40, 50

// ✅ filter(): Cerates a New array with elements that pass the condition
const greaterNum = numbers.filter((num) => num >= 10);
console.log(greaterNum); // 10, 15, 20, 25

// ✅ reduce(): Reduces the array to a single value (like sum, product, etc.)
const total = numbers.reduce((acc, cur) => acc + cur, 100);
console.log(total); // 180

// ✅ reduce() with initial value: Starts from given number instead of 0/1
const arrFind = numbers.find((num) => num % 5 === 0); // this is logic num % 5 === 0
console.log(arrFind); // 10

// ✅ some(): Checks if at least one element matches the condition
const arrayChack = numbers.some((ele) => ele === 30);
console.log(arrayChack); // false

// ✅ every(): Returns true if ALL elements match the condition
const positiveNum = numbers.every((num) => num >= 0); //all numbers is positive its return ture
console.log(positiveNum); // ture

// ✅ includes(): Checks if the array contains a specific element
const includesArr = numbers.includes(50); // false
console.log(includesArr); // false (because 50 is not in the array)

// ✅ indexOf(): Returns the index of the first occurrence of the element, or -1 if not found
const indexofArr = numbers.indexOf(15);
console.log(indexofArr); // 3 (because 15 is at index 3)

// ✅ flat(): Flattens nested arrays into a single array
const flatArr = [1, 2, 3, [50]];
console.log(flatArr.flat()); // [1, 2, 3, 50]

// ✅ flatMap(): Maps and flattens results into a single array
const arrFlatMap = numbers.flatMap((num) => [num * 2]);
console.log(arrFlatMap); // [6, 14, 20, 30, 40, 50]

// Summary ✨
// map() → transform each element → new array

// filter() → keep only elements that pass condition

// reduce() → combine into single value (sum, product, etc.)

// forEach() → loop through elements (no return)

// find() → first element that matches condition

// findIndex() → index of first matching element

// some() → true if at least one matches

// every() → true if ALL match

// includes() → check if element exists

// indexOf() → index of element (or -1 if not found)

// flat() → flatten nested arrays

// flatMap() → map + flatten in one step
