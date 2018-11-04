import { RaceRow } from './race-row';

describe('RaceRow', () => {
  it('should create an instance', () => {
    expect(new RaceRow()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let raceRow = new RaceRow({
      Id: 1,
      Car: 'Ferrari',
      StartPosition: 1,
      Incidents: 0,
      Points: 100,
      InfractionPoints: 0,
      PenaltyPoints: 0
    });

    expect(raceRow.Id).toEqual(1);
    expect(raceRow.Car).toEqual('Ferrari');
  });
});