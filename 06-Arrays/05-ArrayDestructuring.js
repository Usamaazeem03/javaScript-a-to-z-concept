// Array Destructuring
const colors = ["red", "green", "blue"];
const [coler1, coler2] = colors;

console.log(coler1, coler2); // red, green

// Skip elements Destructuring
// skip element by putting an empty comma like this [num1, , num3]
const numbers = [44, 67, 24, 75, 21, 246, 66];
const [num1, , num3] = numbers;
console.log(num1, num3); //44, 24

// Default Values Destructuring
const user = ["Usama"];
const [username, role = "Guest"] = user;
console.log(username, role); //Usama, Guest

// Swap Variables Destructuring
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); //2, 1

// Nested Array Destructuring
const nestedArr = [1, [2, 3]];
const [x, [z, y]] = nestedArr;
console.log(x, y, z); //x=1,y=2,z=3

//Rest operator
const nums = [1, 2, 3, 4, 5, 6];
const [first, second, ...rest] = nums;
console.log(first, second, rest); //first = 1,second = 2,rest = [3,4,5,6]
