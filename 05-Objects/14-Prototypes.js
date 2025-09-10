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
