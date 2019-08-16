import { TestBed } from '@angular/core/testing';

import { SpUserService } from './sp-user.service';

describe('SpUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpUserService = TestBed.get(SpUserService);
    expect(service).toBeTruthy();
  });
});
