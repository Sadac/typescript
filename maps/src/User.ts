import faker from 'faker';

export class User {
  // types definition for the class attributes
  name: string;
  location: {
    lat: number;
    lng: number
  }

  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return 'User name: ' + this.name
  }
}
