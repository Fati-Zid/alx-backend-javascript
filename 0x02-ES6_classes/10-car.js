/* eslint-disable no-underscore-dangle */
class Car {
  // Constructor with attributes: brand, motor, color
  constructor(brand, motor, color) {
    // Storing attributes with underscore prefix
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the Car object
  cloneCar() {
    // Creating a new object of the Car class with the same attributes
    return new Car(this._brand, this._motor, this._color);
  }
}

// Testing the Car class
const myCar = new Car('Toyota', 'Gasoline', 'Blue');
const clonedCar = myCar.cloneCar();
console.log(clonedCar); // Output: Car { _brand: 'Toyota', _motor: 'Gasoline', _color: 'Blue' }

export default Car;
