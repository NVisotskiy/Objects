// Declare car object
const car = {
  manufacturer: "BMW",
  model: "X5",
  "year of manufacture": 2022,
  "average speed": 100,
  "fuel tank volume": 60,
  "average fuel consumption per 100 km": 8,
  drivers: []
};

// Method that outputs information about the car
car.info = function() {
  console.log(`Manufacturer: ${this.manufacturer}`);
  console.log(`Model: ${this.model}`);
  console.log(`Year of manufacture: ${this["year of manufacture"]}`);
  console.log(`Average speed: ${this["average speed"]}`);
  console.log(`Fuel tank volume: ${this["fuel tank volume"]}`);
  console.log(`Average fuel consumption per 100 km: ${this["average fuel consumption per 100 km"]}`);
  console.log(`Drivers: ${this.drivers.join(", ")}`);
};

// Method for adding a driver name to the list
car.add_driver = function(name) {
  this.drivers.push(name);
};

// Method for checking if a driver is in the list
car.check_driver = function(name) {
  return this.drivers.includes(name);
};

// Method for calculating required time and amount of fuel to travel a distance at the average speed
car.fuel_consumption_and_time = function(distance) {
  const average_fuel_consumption = this["average fuel consumption per 100 km"];
  const average_speed = this["average speed"];

  let time_on_road = distance / average_speed;
  const number_of_breaks = Math.floor(time_on_road / 4);

  // Additional time for breaks
  time_on_road += number_of_breaks;

  // Calculation of fuel consumption
  const fuel_consumption = (distance / 100) * average_fuel_consumption;

  return { fuel_consumption: fuel_consumption, time_on_road: time_on_road };
};
