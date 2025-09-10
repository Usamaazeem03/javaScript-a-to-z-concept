// object Prototypes
// constructor function
/*
function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

Animal.prototype.makeSound = function () {
  console.log(this.sound);
};

const dog = new Animal("Dog", "Woof!");
const cat = new Animal("Cat", "Meow!");

Animal.prototype.info = function () {
  console.log(`this is a ${this.name} make sound ${this.sound}`);
};
dog.makeSound(); // Woof!
cat.makeSound(); // Meow!

dog.info(); // This is Dog make sound Woof!
*/
//Example 02
function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}
Animal.prototype.makeSound = function () {
  console.log(this.sound);
};
// Child Constructor
function Bird(name, sound, canFly) {
  Animal.call(this, name, sound);
  this.canFly = canFly;
}
// Inherit methods
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

// Bird-specific method
Bird.prototype.fly = function () {
  console.log(
    this.canFly ? `${this.name} can fly!` : `${this.name} cannot fly.`
  );
};

const sparrow = new Bird("Sparrow", "Chirp!", true);
sparrow.makeSound(); // Chirp! (from Animal)
sparrow.fly(); // Sparrow can fly!

const penguin = new Bird("Penguin", "Honk!", false);
penguin.makeSound(); // Honk! (from Animal)
penguin.fly(); // Penguin cannot fly.

// Summary ✨
// Every JavaScipt object has a hiddan link(--proto--) to another object -> its prototype.
// . A prototype is like a shared blueprent:
// if a property/method is not found in the object, JS looks for it in the prototype.
// . Using consructor.prototype.method = ... -> all object created from that constructor can use the methor
// ✅ Saves memory (method stored once, shared by all objects).
