const Faker = require('Faker');
import { Mappable } from "./CustomMap";

export class User implements Mappable{
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.name = Faker.name.firstName();
    this.location = {
      lat: parseFloat(Faker.address.latitude()),
      lng:parseFloat(Faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `User name is ${this.name}`;
  }
}
