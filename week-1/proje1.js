class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  info() {
    return `Bu araç ${this.brand} markalı ve ${this.year} modeldir.`;
  }
}

class Car extends Vehicle {
  constructor(brand, year, doorCount) {
    super(brand, year);
    this.doorCount = doorCount;
  }

  info() {
    return `${super.info()} ${this.doorCount} kapısı vardır.`;
  }
}

class Motorcycle extends Vehicle {
  constructor(brand, year, hasSidecar) {
    super(brand, year);
    this.hasSidecar = hasSidecar;
  }
  info() {
    return `${super.info()} Yan sepeti ${
      this.hasSidecar ? "vardır." : "yoktur."
    }`;
  }
}

const car = new Car("Mazda", "2022", 2);
console.log(car.info());

const motorcycle = new Motorcycle("Honda", "2019", false);
console.log(motorcycle.info());
