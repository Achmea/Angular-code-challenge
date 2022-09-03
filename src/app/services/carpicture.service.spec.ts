import { TestBed } from '@angular/core/testing';

import { CarpictureService } from './carpicture.service';

describe('CarpictureService', () => {
  let service: CarpictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarpictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
