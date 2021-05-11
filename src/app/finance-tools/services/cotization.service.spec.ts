import { TestBed } from '@angular/core/testing';

import { CotizationService } from './cotization.service';

describe('CotizationService', () => {
  let service: CotizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CotizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
