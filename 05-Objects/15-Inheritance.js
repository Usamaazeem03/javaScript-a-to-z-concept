// Object Inheritance

function Vehicle(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}
Vehicle.prototype.info = function () {
  console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}
`);
};
function Car(brand, model, year, fuelType) {
  Vehicle.call(this, brand, model, year);
  this.fuelType = fuelType;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.fuelInfo = function () {
  console.log(this.fuelType);
};
function Bike(brand, model, year, type) {
  Car.call(this, brand, model, year);
  this.type = type;
}

Bike.prototype = Object.create(Car.prototype);
Bike.prototype.constructor = Bike;

Bike.prototype.bikeType = function () {
  console.log(this.type);
};

const car = new Car("Toyota", "Corolla", 2020, "Petrol");
const bike = new Bike("Yamaha", "R1", 2022, "Sports");

bike.info(); // Brand: Yamaha, Model: R1, Year: 2022
bike.bikeType(); // Sports
