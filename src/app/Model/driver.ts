export class Driver {
    id: number;
    customerId: number;
    name: string;
    number: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
