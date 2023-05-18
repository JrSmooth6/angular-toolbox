import { TestBed } from '@angular/core/testing';

import { CliServiceService } from './cli-service.service';

describe('CliServiceService', () => {
  let service: CliServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CliServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
