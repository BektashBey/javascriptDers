//Driver
//Passenger
//Booking

class Driver {
  constructor(name) {
    this.name = name;
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.bookings = [];
    this.location = "İzmir";
  }
  book(driver, destination) {
    const booking = new Booking(driver, this, destination);

    this.location = destination;
    this.bookings.push(booking);

    return booking;
  }
}

class Booking {
  constructor(driver, passenger, destination) {
    this.driver = driver;
    this.passenger = passenger;
    this.destination = destination;
    this.origin = passenger.location;
  }
}

const passenger = new Passenger("Ozan");
const driver = new Driver("Steve");

function printBooking(booking) {
  console.log(
    `${booking.passenger.name} wants travel from ${booking.origin} to ${booking.destination}`
  );
}
const booking1 = passenger.book(driver, "Ankara");
printBooking(booking1);
const booking2 = passenger.book(driver, "Sivas");
printBooking(booking2);
