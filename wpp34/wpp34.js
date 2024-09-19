// WPP_34.

// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.


class Vehicle{
    constructor(make, model, year)
    {
        this.make = make;
        this.model = model;
        this.year = year;

    }

    details()
    {
         console.log(`Vehicle: ${this.year} ${this.make} ${this.model}`);
    }
}
class Car extends Vehicle{
    constructor(make, model, year, doors)
    {
        super(make,model,year);
        this.doors = doors;
    }

    details()
    {
        console.log(
      `Car: ${this.year} ${this.make} ${this.model} with ${this.doors} doors`
    );
    }
}

const myVehicle = new Vehicle("Toyota", "Corolla", 2015);
myVehicle.details();  
const myCar = new Car("Honda", "Civic", 2020, 4);
myCar.details();