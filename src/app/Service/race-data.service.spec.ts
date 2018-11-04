import { TestBed } from '@angular/core/testing';

import { RaceDataService } from './race-data.service';

describe('RaceDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaceDataService = TestBed.get(RaceDataService);
    expect(service).toBeTruthy();
  });
});
