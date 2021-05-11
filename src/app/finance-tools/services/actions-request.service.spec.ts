import { TestBed } from '@angular/core/testing';

import { ActionsRequestService } from './actions-request.service';

describe('ActionsRequestService', () => {
  let service: ActionsRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionsRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
