export default class Car {
  constructor(make, model, year, miles) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.miles = miles;
  }

  printInfo = () => console.log(`This ${this.year} ${this.make} ${this.model} has ${this.miles} miles.`);

  addMileage = (num=100) => this.miles += num;
};
