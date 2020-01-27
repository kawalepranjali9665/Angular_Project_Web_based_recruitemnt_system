import { TestBed, inject } from '@angular/core/testing';

import { EmployerService } from './employer.service';

describe('EmployerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployerService]
    });
  });

  it('should be created', inject([EmployerService], (service: EmployerService) => {
    expect(service).toBeTruthy();
  }));
});
