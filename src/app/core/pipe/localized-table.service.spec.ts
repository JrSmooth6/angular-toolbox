import { TestBed } from '@angular/core/testing';

import { LocalizedTablePipe } from './localized-table.service';

describe('LocalizedTableService', () => {
  let service: LocalizedTablePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalizedTablePipe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
