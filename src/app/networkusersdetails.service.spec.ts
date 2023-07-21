import { TestBed } from '@angular/core/testing';

import { NetworkusersdetailsService } from './networkusersdetails.service';

describe('NetworkusersdetailsService', () => {
  let service: NetworkusersdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkusersdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
