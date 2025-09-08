// Object Freezing / Sealing
// Object.freeze()
const employee = {
  id: 101,
  name: "Usama",
  salary: 90000,
};

Object.freeze(employee);
// ❌ Try to update
employee.salary = 240000;
employee.department = "IT";
delete employee.name;

console.log(employee);
// Summary
// Object.freeze(employee) makes the object completely read-only.
// ❌ You cannot update existing properties.
// ❌ You cannot add new properties.
// ❌ You cannot delete properties.
// The object stays exactly the same after freeze.

// Object.seal()
const employee2 = {
  id: 101,
  name: "Usama",
  salary: 90000,
};
Object.seal(employee2);
// ❌ Try to add
employee2.department = "IT";
// ✅ Try to update
employee2.salary = 240000;
// ❌ Try to delete
delete employee2.name;

// Summary
// its make object like seal room you modify your table or chair books 😉
// ✅ Update allowed
// ❌ Add not allowed
// ❌ Delete not allowed
