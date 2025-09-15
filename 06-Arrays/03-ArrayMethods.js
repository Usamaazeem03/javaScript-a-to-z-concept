// Array Mutating Methods
// push(), pop(), shift(), unShift(), splice, sort(), reverse()

const fruits = ["apple", "banana", "mango", "orange"];
// push used to add new element in end
fruits.push("grape");
// shift used to remove first element in array
fruits.shift(); // remove apple
// unshift used to add element at the beginning of array
fruits.unshift("kiwi"); //  adds "kiwi" at the start
// splice used to element to replace 1 element at index 2
fruits.splice(2, 1, "pear"); // replaces "mango" with "pear"
// Used to sort the array elements in alphabetical (or ascending) order
fruits.sort(); //["banana", "apple", "pear"] → ["apple", "banana", "pear"]
// Used to reverse the order of elements in the array
fruits.reverse(); //["apple", "banana", "pear"] → ["pear", "banana", "apple"]

// Summary ✨
// push() → add element at the end

// pop() → remove element from the end

// shift() → remove element from the start

// unshift() → add element at the start

// splice(start, deleteCount, newItem) → remove/replace/insert at a specific index

// sort() → sort alphabetically (as strings by default)

// reverse() → reverse the order of elements
