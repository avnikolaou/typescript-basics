import * as faker from 'faker';

export class Company {
    companyName: string
    catchPhrase: string
    location : {
        lat: number,
        lng: number
    }

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

}

export class OrderEze extends Company {
    constructor(public location: { lat: number, lng: number }) {
        super();
    }
}