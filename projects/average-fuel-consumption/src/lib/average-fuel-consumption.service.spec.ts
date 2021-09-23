import { TestBed } from '@angular/core/testing';

import { AverageFuelConsumptionService } from './average-fuel-consumption.service';

describe('AverageFuelConsumptionService', () => {
  let service: AverageFuelConsumptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AverageFuelConsumptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
