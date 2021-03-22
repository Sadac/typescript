export { }; // To isolate this file to not have conflict with other instances of car along the code files

/**
 * Classes MODIFIERS
 * 1. public: method can be called any where, any time (default)
 * 2. private: method can only be called by others methods in 'this' class
 * 3. protected: method can only be called by others method in 'this' class
 *  or methods in child classes
 */

class Vehicle {
  color: string

  constructor(color: string) {
    this.color = color
  }

  // We can not override the modifiers, so Car cant use drive as private if here is public
  // public drive(): void {
  //   console.log('drive here!')
  // }

  protected honk(): void {
    console.log('beep beep!')
  }
}

class Car extends Vehicle {
  // we can initialize variables with this. inside the constructor
  // or just as params
  constructor(public wheels: number, color: string) { // as color is from parent we cant edit the modifier (public)
    super(color); // to call the constructor of the parent class whenever we call the constructor
    // of this child class
  }

  private drive(): void { // only can be called inside this class. You cant do car.drive()
    console.log("redo drive from car!")
  }

  startDrivingProcess(): void {
    this.drive() // can call the prive drive method inside the class
    this.honk()
  }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color);
// vehicle.drive()
// vehicle.honk()

const car = new Car(4, 'red')
car.startDrivingProcess()


