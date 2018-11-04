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

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}