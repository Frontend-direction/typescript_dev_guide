import {Mappable} from "./CustomMap";
const Faker = require('Faker');

export class Company implements  Mappable{
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.companyName = Faker.company.companyName();
    this.catchPhrase = Faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(Faker.address.latitude()),
      lng: parseFloat(Faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company is ${this.companyName}</h1>
        Catch phrase: ${this.catchPhrase}
      </div>
    `;
  }
}
