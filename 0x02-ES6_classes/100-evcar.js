/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import Car from './10-car';

// Implement the EVCar class that extends the Car class
class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}

// Usage
const myCar = new EVCar('Tesla', 'Electric', 'Red', '300 miles');
console.log(myCar.cloneCar());

export default EVCar;
