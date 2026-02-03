import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override cloneCar to return a Car instance instead of EVCar
  cloneCar() {
    // Create a new Car instance using the parent class constructor
    return new Car(this._brand, this._motor, this._color);
  }
}
