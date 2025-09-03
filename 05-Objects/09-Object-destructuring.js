// Object Destructuring
const car = {
  brand: "BYD",
  model: "ATTO 2",
};

const { brand, model } = car;
console.log(brand); // BYD
console.log(model); // ATTO 2

// Example 02
const bird = {
  name: "house sparrow",
  length: "6.3in",
  mass: "39g",
  coloured: {
    male: "white/brown",
    female: "brown/grey",
  },
  canFly: true,
};

// Destructure 'name' (top-level) and 'male' (nested inside 'coloured')
const {
  coloured: { male: maleColer },
  name,
} = bird;
console.log(name); //house sparrow
console.log(maleColer); //white/brown

// Summary ✨
// Object Destructuring is a JavaScript feature that lets you unpack values object into variables quickly.
