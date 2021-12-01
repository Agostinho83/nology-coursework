// Challenge 1

class Employee {
    constructor(name, rating, grade, nextGrade) {
        this.name = name;
        this.rating = rating;
        this.grade = grade;
        this.nextGrade = nextGrade;
    }


    employeeAssessment() {
        if (this.rating >= 7) {
            return `${this.name} will likely be promoted from ${this.grade} to ${this.nextGrade}`;
        } else {
            return `${this.name} needs to work harder. No promotion.`;
        }
    }
}
const daniel = new Employee("Daniel", 8, "Manager", "Senior Manager");
const mark = new Employee("Mark", 5, "junior", "Associate");
// console.log(daniel);
// console.log(daniel.employeeAssessment());
// console.log(mark.employeeAssessment());


// Challenge 2

class Vehicle {
    constructor(name, size) {
        this.name = name;
        this.size = size;
        this.currentVelocity = 0;
        this.currentDirection = 0;
    }

    getCurrentDirection() {
        return this.currentDirection;
    }

    getCurrentVelocity() {
        return this.CurrentVelocity;
    }

    steer(direction) {
        this.currentDirection += direction;
        console.log("vehicle.steer(): Steering at " + this.currentDirection + " degrees.");
    }

    move(velocity, direction) {
        this.currentVelocity = velocity;
        this.currentDirection = direction;
        console.log("vehicle.move(): Moving at " + this.currentVelocity + "mph in direction " + this.currentDirection + ".");
    }


    stop() {
        this.currentVelocity = 0;
    }

}

const samsVehicle = new Vehicle("Tractor", "Large");

// check properties/methods
// samsVehicle.steer(45);
// samsVehicle.move(20, 30);


class Car extends Vehicle {
    constructor(name, size, wheels, doors, gears, isManual) {
        super(name, size);
        this.wheels = wheels;
        this.doors = doors;
        this.gears = gears;
        this.isManual = isManual;
        this.currentGear = 1;
    }

    changeGear(currentGear) {
        this.currentGear = currentGear;
        console.log("Car.changeGear(): Changed to gear " + this.currentGear);
    }

    changeVelocity(speed, direction) {
        console.log("Car.changeVelocity(): Velocity " + speed + " direction " + direction);
        super.move(speed, direction);
    }
}

const samsCar = new Car('samCar', 'Medium', 4, 5, 5, true, 0);

// check properties/methods
// console.log(samsCar.currentGear);
// samsCar.changeGear(2);
// samsCar.changeVelocity(25, 40);


class Ferrari extends Car {
    constructor(roadServiceMonths) {
        super("Ferrari", "RWD", 4, 5, 6, false);
        this.roadServiceMonths = roadServiceMonths;
    }

    // rate is difference in speed from the current speed

    accelerate(rate) {
        let newVelocity = super.getCurrentVelocity() + rate;
        if (newVelocity == 0) {
            super.stop();
            super.changeGear(1);
        } else if (newVelocity > 0 && newVelocity <= 10) {
            super.changeGear(1);
        } else if (newVelocity > 10 && newVelocity <= 20) {
            super.changeGear(2);
        } else if (newVelocity > 20 && newVelocity <= 30) {
            super.changeGear(3);
        } else {
            super.changeGear(4);
        }

        if (newVelocity > 0) {
            super.changeVelocity(newVelocity, super.getCurrentDirection());
        }

    }
}


const ferrari = new Ferrari(7);

// check  properties/methods
ferrari.steer(45);
ferrari.accelerate(30);
// should now be 50
//ferrari.accelerate(20);