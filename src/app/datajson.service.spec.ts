import { TestBed } from '@angular/core/testing';

import { DatajsonService } from './datajson.service';

describe('DatajsonService', () => {
  let service: DatajsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatajsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
