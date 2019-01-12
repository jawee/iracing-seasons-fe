import { TestBed } from '@angular/core/testing';

import { PointScoringDataService } from './point-scoring-data.service';

describe('PointScoringDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointScoringDataService = TestBed.get(PointScoringDataService);
    expect(service).toBeTruthy();
  });
});
