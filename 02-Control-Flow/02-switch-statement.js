// Switch statements
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(`Today is ${dayName}.`); // Today is Wednesday.
// Switch statement with multiple cases
let fruit = "apple";
let color;
switch (fruit) {
  case "apple":
  case "cherry":
  case "strawberry":
    color = "red";
    break;
  case "banana":
  case "lemon":
    color = "yellow";
    break;
  case "kiwi":
  case "avocado":
    color = "green";
    break;
  default:
    color = "unknown";
}
console.log(`The color of ${fruit} is ${color}.`); // The color of apple is red.
// Switch statement without break (fall-through)
let grade = "B";
let message = "";
switch (grade) {
  case "A":
    message += "Excellent! ";
  case "B":
    message += "Well done! ";
  case "C":
    message += "Good job! ";
    break;
  case "D":
    message += "You passed. ";
    break;
  case "F":
    message += "Better luck next time. ";
    break;
  default:
    message = "Invalid grade.";
}
console.log(message); // Well done! Good job!

// Summary ✨
// This code demonstrates the use of switch statements in JavaScript to control the flow of execution based on the value of a variable. It includes examples of basic switch statements, handling multiple cases, and fall-through behavior when break statements are omitted. Each example is illustrated with clear code and outputs. Each section includes comments explaining the purpose and functionality of the code used.
