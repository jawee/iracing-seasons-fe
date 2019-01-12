import { RaceResult } from './race-result';

export class PointScoring {
    driverName: string;
    points: number;
    raceResults: RaceResult[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
