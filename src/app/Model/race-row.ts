export class RaceRow {
    id: number;
    car: string;
    position: number;
    startPosition: number;
    incidents: number;
    points: number;
    infractionPoints: number;
    penaltyPoints: number;
    driver: string;
    driverId: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}