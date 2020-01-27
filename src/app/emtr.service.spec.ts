import { TestBed, inject } from '@angular/core/testing';

import { EmtrService } from './emtr.service';

describe('EmtrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmtrService]
    });
  });

  it('should be created', inject([EmtrService], (service: EmtrService) => {
    expect(service).toBeTruthy();
  }));
});
