import { TestBed } from '@angular/core/testing';

import { DailyPictureService } from './daily-picture.service';

describe('DailyPictureService', () => {
  let service: DailyPictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyPictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
