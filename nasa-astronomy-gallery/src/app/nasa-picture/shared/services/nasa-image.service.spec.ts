import { TestBed } from '@angular/core/testing';

import { NasaImageService } from './nasa-image.service';

describe('NasaImageService', () => {
  let service: NasaImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
