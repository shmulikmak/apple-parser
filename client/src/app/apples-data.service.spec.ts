/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApplesDataService } from './apples-data.service';

describe('Service: ApplesData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplesDataService]
    });
  });

  it('should ...', inject([ApplesDataService], (service: ApplesDataService) => {
    expect(service).toBeTruthy();
  }));
});
