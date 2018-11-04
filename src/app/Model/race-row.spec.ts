import { RaceRow } from './race-row';

describe('RaceRow', () => {
  it('should create an instance', () => {
    expect(new RaceRow()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let raceRow = new RaceRow({
      id: 1,
      car: 'Ferrari',
      startPosition: 1,
      incidents: 0,
      points: 100,
      infractionPoints: 0,
      penaltyPoints: 0
    });

    expect(raceRow.id).toEqual(1);
    expect(raceRow.car).toEqual('Ferrari');
  });
});