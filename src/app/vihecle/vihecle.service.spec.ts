import { TestBed } from '@angular/core/testing';

import { VihecleService } from './vihecle.service';

describe('VihecleService', () => {
  let service: VihecleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VihecleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
