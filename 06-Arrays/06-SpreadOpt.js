// Spread Opreator In Arrays
// combine Arrays
const fruits = ["apple", "banana"];
const moreFruits = ["orange", "grape"];
const winterFruits = [...fruits, ...moreFruits];

// Copy Array
const numbers = [1, 2, 3];
const copiedNumbers = [...numbers];
console.log(copiedNumbers); // [1,2,3]

// Add Elements While Copying
const colors = ["red", "green"];
const newColors = ["blue", ...colors];
console.log(newColors); // ['blue', 'red', 'green']

// Find Max Value
const nums = [5, 10, 2, 8];
const maxNum = Math.max(...nums);
console.log(maxNum); // 10

// Spread with Function Arguments
function sum(a, b, c) {
  return a + b + c;
}
const values = [2, 4, 6];
const total = sum(...values);
console.log(total); // 12
