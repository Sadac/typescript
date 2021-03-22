/**
 * Interfaces + Classes are the strong code use in Typescript
 * An interface creates a new type, that describe the props and values of an object
 */

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string; // a function that return a string
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary: function (): string {
    return 'Name ' + this.name
  }
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());

}

printVehicle(oldCivic)
