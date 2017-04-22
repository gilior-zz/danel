import { TestBed, inject } from '@angular/core/testing';

import { MdlsService } from './mdls.service';

describe('MdlsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MdlsService]
    });
  });

  it('should ...', inject([MdlsService], (service: MdlsService) => {
    expect(service).toBeTruthy();
  }));
});
