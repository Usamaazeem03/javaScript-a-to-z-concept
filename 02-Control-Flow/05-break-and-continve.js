// breack and continue
for (let i = 1; i <= 10; i++) {
  // if the iteration is 5, break the loop
  if (i === 5) {
    console.log("Breaking the loop at iteration 5");
    break; // exit the loop
  }
  console.log(`Iteration ${i}`);
}
// continue example
for (let j = 1; j <= 10; j++) {
  // if the iteration is 5, skip this iteration
  if (j === 5) {
    console.log("Skipping iteration 5");
    continue; // skip to the next iteration
  }
  console.log(`Iteration ${j}`);
}

// Summary ✨
// This code demonstrates the use of break and continue statements in JavaScript loops.
// The break statement exits the loop entirely when a certain condition is met (in this case, when i equals 5).
// The continue statement skips the current iteration and moves to the next one when a certain condition is
// met (in this case, when j equals 5).
// Use break when you want to stop the loop completely, and use continue when you want to skip specific iterations.
// Note: Both break and continue can be used in any type of loop (for, while, do...while).
// However, they are most commonly used in for loops as shown above.
