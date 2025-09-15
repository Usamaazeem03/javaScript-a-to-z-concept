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
console.log(arrFind); // 10, 15, 20, 25

// ✅ some(): Checks if at least one element matches the condition
const arrayChack = numbers.some((ele) => ele === 30);
console.log(arrayChack); // false

//
const positiveNum = numbers.every((num) => num >= 0); //all numbers is positive its return ture
