import { Race } from './race';

export class Season {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    races: Race[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
