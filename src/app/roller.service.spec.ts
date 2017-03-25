import { TestBed, inject } from '@angular/core/testing';

import { RollerService } from './roller.service';

describe('RollerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RollerService]
    });
  });

  it('should ...', inject([RollerService], (service: RollerService) => {
    expect(service).toBeTruthy();
  }));
});
