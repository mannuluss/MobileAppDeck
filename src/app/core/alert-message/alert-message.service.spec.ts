/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlertMessageService } from './alert-message.service';

describe('Service: AlertMessage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertMessageService]
    });
  });

  it('should ...', inject([AlertMessageService], (service: AlertMessageService) => {
    expect(service).toBeTruthy();
  }));
});
