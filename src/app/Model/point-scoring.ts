export class PointScoring {
    customerId: number;
    points: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
