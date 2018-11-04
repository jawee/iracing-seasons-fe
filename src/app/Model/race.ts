import { RaceRow } from './race-row';

export class Race {
    id: number;
    track: string;
    seasonId: number;
    raceNumber: number;
    raceYype: number;
    raceRows: Array<RaceRow>;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
