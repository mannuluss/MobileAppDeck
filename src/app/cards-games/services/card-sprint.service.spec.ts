/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CardSprintService } from './card-sprint.service';

describe('Service: CardSprint', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardSprintService]
    });
  });

  it('should ...', inject([CardSprintService], (service: CardSprintService) => {
    expect(service).toBeTruthy();
  }));
});
